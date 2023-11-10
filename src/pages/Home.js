import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';

export default function Home() {
    const {userData} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(userData.email === undefined) {
            navigate('/');
            return;
        }
    })

    console.log(userData);

  return (
    <div>
      अ आ इ ई उ ऊ ए ऐ ओ औ अं अ:
      क ख ग घ ज्ञ
      च छ ज झ न्य
      त थ द ध न 
      ट ठ ड ढ ण
      प फ ब भ म
      य र ल व श
      ष स ह क्ष त्र ज्ञ
    </div>
  )
}
