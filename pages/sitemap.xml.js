import { Amplify, API, graphqlOperation } from 'aws-amplify';
import {
  listLessons,
  listCourses,
  listLMSCourses,
  listBlogs,
  listCareers,
} from '../src/graphql/queries';

const URL = 'https://packagingschool.com';

function generateSiteMap(lessons, courses, articles, careers) {
  return `<?xml version="1.0" encoding="UTF-8"?>
       <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
         <url>
           <loc>${URL}</loc>
         </url>
         <url>
           <loc>${URL}/about</loc>
         </url>
          <url>
           <loc>${URL}/acccsa</loc>
         </url>
          <url>
           <loc>${URL}/all_courses</loc>
         </url>
         <url>
           <loc>${URL}/andrew</loc>
         </url>
         <url>
           <loc>${URL}/automotive-courses</loc>
         </url>
         <url>
           <loc>${URL}/automotive-faculty</loc>
         </url>
         <url>
           <loc>${URL}/cmpm-vs-cps</loc>
         </url>
         <url>
           <loc>${URL}/contact</loc>
         </url>
         <url>
           <loc>${URL}/cybermonday</loc>
         </url>
         <url>
           <loc>${URL}/edu</loc>
         </url>
         <url>
           <loc>${URL}/faq</loc>
         </url>
         <url>
           <loc>${URL}/food-packaging</loc>
         </url>
         <url>
           <loc>${URL}/isbt</loc>
         </url>
         <url>
           <loc>${URL}/library</loc>
         </url>
         <url>
           <loc>${URL}/pack-design-workshop-for-educators</loc>
         </url>
         <url>
           <loc>${URL}/packaging-events</loc>
         </url>
         <url>
           <loc>${URL}/packnotes</loc>
         </url>
         <url>
           <loc>${URL}/partner-with-us</loc>
         </url>
         <url>
           <loc>${URL}/sustainability-workshop</loc>
         </url>
         <url>
           <loc>${URL}/testimonials</loc>
         </url>
         <url>
           <loc>${URL}/your-company</loc>
         </url>
         <url>
           <loc>${URL}/certifications/get-to-know-apc</loc>
         </url>
         <url>
           <loc>${URL}/certifications/get-to-know-cmpm</loc>
         </url>
         <url>
           <loc>${URL}/certifications/get-to-know-cps</loc>
         </url>
         <url>
           <loc>${URL}/certifications/get-to-know-csp</loc>
         </url>
         <url>
           <loc>${URL}/certifications/csp/syllabus</loc>
         </url>
         <url>
           <loc>${URL}/404</loc>
         </url>
         ${lessons
           .map(({ slug }) => {
             return `
               <url>
                   <loc>${`${URL}/lessons/${slug}`}</loc>
               </url>
             `;
           })
           .join('')}
         ${courses
           .map(({ slug }) => {
             return `
               <url>
                   <loc>${`${URL}/courses/${slug}`}</loc>
               </url>
             `;
           })
           .join('')}
           ${articles
             .map(({ slug }) => {
               return `
                <url>
                    <loc>${`${URL}/articles/${slug}`}</loc>
                </url>
              `;
             })
             .join('')}
           ${careers
             .map(({ slug }) => {
               return `
                <url>
                    <loc>${`${URL}/careers/${slug}`}</loc>
                </url>
              `;
             })
             .join('')}
       </urlset>
     `;
}

export async function getServerSideProps({ res }) {
  const lessons = await API.graphql({
    query: listLessons,
    variables: { filter: { status: { eq: 'PUBLISHED' } } },
  });

  const courses = await API.graphql({
    query: listLMSCourses,
    variables: { filter: { collection: { contains: 'null' } } },
  });

  const getArticles = /* GraphQL */ `
    query MyQuery {
      listBlogs {
        items {
          id
          slug
          title
          content
          date
        }
      }
    }
  `;

  const articles = await API.graphql(graphqlOperation(getArticles));

  const careers = await API.graphql(graphqlOperation(listCareers));

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(
    lessons.data.listLessons.items,
    courses.data.listLMSCourses.items,
    articles.data.listBlogs.items,
    careers.data.listCareers.items
  );

  res.setHeader('Content-Type', 'text/xml');
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
