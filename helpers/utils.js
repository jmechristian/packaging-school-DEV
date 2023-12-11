export const setTextColor = (cat) => {
  switch (cat) {
    case 'Materials':
      return 'bg-base-dark text-white';
    case 'MATERIALS':
      return 'bg-base-dark text-white';
    case 'Industry':
      return 'bg-base-brand';
    case 'INDUSTRY':
      return 'bg-base-brand text-white';
    case 'Design':
      return 'bg-clemson';
    case 'DESIGN':
      return 'bg-clemson';
    case 'FOODANDBEVERAGE':
      return 'bg-indigo-400 text-neutral-900';
    case 'Food & Beverage':
      return 'bg-indigo-400 text-neutral-900';
    case 'Supply Chain & Logistics':
      return 'bg-clemson-dark text-white';
    case 'SUPPLYCHAIN':
      return 'bg-clemson-dark text-white';
    case 'Business':
      return 'bg-green-600';
    case 'BUSINESS':
      return 'bg-green-600';
    case 'AUTO':
      return 'bg-brand-yellow text-neutral-900';
    case 'Automotive':
      return 'bg-brand-yellow text-neutral-900';
    case 'Explore All Courses':
      return 'bg-black text-neutral-900';
  }
};

export const setCategoryText = (cat) => {
  switch (cat) {
    case 'Materials':
      return 'Materials';
    case 'MATERIALS':
      return 'Materials';
    case 'Industry':
      return 'Industry';
    case 'INDUSTRY':
      return 'Industry';
    case 'Design':
      return 'Design';
    case 'DESIGN':
      return 'Design';
    case 'FOODANDBEVERAGE':
      return 'Food & Beverage';
    case 'Food & Beverage':
      return 'Food & Beverage';
    case 'Supply Chain & Logistics':
      return 'Supply Chain & Logistics';
    case 'SUPPLYCHAIN':
      return 'Supply Chain & Logistics';
    case 'Business':
      return 'Business';
    case 'BUSINESS':
      return 'Business';
    case 'AUTO':
      return 'Automotive';
  }
};
