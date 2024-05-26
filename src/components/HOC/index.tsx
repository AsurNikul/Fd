import React, {useEffect, useState} from 'react';

const HOC = WrapperComp => {
  const HOC = props => {
    // const data = Services?.data?.data?.data?.purchased_services;
    return (
      <WrapperComp
        {...props}
        //   data={data}
      />
    );
  };

  return HOC;
};

export default HOC;
