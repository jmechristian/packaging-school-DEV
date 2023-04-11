import CMPMContextProvider from '../../components/forms/cmpm/CMPMContextProvider';
import CMPMWrapper from '../../components/forms/cmpm/CMPMWrapper';

const Index = () => {
  return (
    <CMPMContextProvider>
      <CMPMWrapper />
    </CMPMContextProvider>
  );
};

export default Index;
