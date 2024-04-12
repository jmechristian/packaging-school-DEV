import React from 'react';
import { useRive } from '@rive-app/react-canvas';

const APCCard = () => {
  const { RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: 'https://packschool.s3.amazonaws.com/apc_card.riv',
    stateMachines: 'rootMachine',
    // Be sure to specify the correct state machine (or animation) name
    onLoadError: (err) => console.log(err),
    // This is optional.Provides additional layout control.
    autoplay: true,
  });

  return <RiveComponent />;
};

export default APCCard;
