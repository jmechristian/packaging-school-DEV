import React from 'react';
import { useRive } from '@rive-app/react-canvas';

const CPSCard = () => {
  const { RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: 'https://packschool.s3.amazonaws.com/cps_card-3.riv',
    stateMachines: 'rootMachine',
    // Be sure to specify the correct state machine (or animation) name
    onLoadError: (err) => console.log(err),
    // This is optional.Provides additional layout control.
    autoplay: true,
  });

  return <RiveComponent />;
};

export default CPSCard;
