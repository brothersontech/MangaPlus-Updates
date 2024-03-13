
import React, { useState, useEffect } from "react";
import { CarouselItem } from "./CarouselItem";
import {createClient} from '@supabase/supabase-js'
// import { supabaseVars } from './SupabaseVariables';


export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mangas, setManga] = useState([]);
<<<<<<< HEAD
  // const supabase = createClient(supabaseVars.url, supabaseVars.apiKey)
  const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_APIKEY)

  // useEffect(() => {
  //   getManga();
  // }, []);
=======
  const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_APIKEY)
  console.log(process.env.REACT_APP_url);
>>>>>>> e4fd41a97327250a8c47f31ae54efffbb1d77249

  useEffect(() => {
    const interval = setInterval(() => {
      getManga();  
    }, 5000);
    return ()=> clearInterval(interval);
  }, []);

  async function getManga(){
    const {data} = await supabase.from('manga_table').select('*');
    setManga(data)
    console.log(data)

  }

  
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= mangas.length) {
      newIndex = mangas.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    
    <div className="carousel">
      
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {mangas.map((manga) => {
          return <CarouselItem manga={manga} width={"100%"} />;
        })}
      </div>
        
      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,100,1,200" rel="stylesheet" />
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {mangas.map((manga, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
