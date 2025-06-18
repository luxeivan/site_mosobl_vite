import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img37550ba6c53ac1236dc634e6c4f22cc1 from "../../img/37550ba6c53ac1236dc634e6c4f22cc1.jpg";
import { addressServer } from "../../config";

export default function ProductionPrograms2025() {
  const [productionPrograms, setProductionPrograms] = useState([]);

  useEffect(() => {
    fetch(
      `${addressServer}/api/proizvodstvennye-programmy-2025s?populate=*&pagination[pageSize]=100`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProductionPrograms(
          data.data.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
        );
      })
      .catch((err) => {
        console.log(err);
        setProductionPrograms([]);
      });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img37550ba6c53ac1236dc634e6c4f22cc1}
        title={"Производственные программы на 2025 год"}
      />
      <div className="page-grid__content" id="content">
        <div className="text-area">
          <YMaps>
            <Map
              state={{
                center: [55.754475, 37.621869],
                zoom: 8,
                behaviors: ["scrollZoom", "drag"],
              }}
              className="yandex-map"
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            >
              <ZoomControl />
              {productionPrograms?.map((item, index) => {
                return (
                  <Placemark
                    key={index}
                    geometry={{
                      type: "Point",
                      coordinates: [item.latitude, item.longitude],
                    }}
                    properties={{
                      balloonContent: `<div className="ballon-down">
                                            <p style="color: #000; margin-bottom: 5px">Производственная программа ${item.name}</p>
                                            <a href="${addressServer}${item.file[0].url}" rel="noopener noreferrer" target="_blank" >Посмотреть</a>
                                            </div>`,

                      iconContent: `${item.name}`,
                      hintContent: `${item.name}`,
                    }}
                    options={{
                      preset: "islands#orangeStretchyIcon",
                    }}
                  />
                );
              })}
            </Map>
          </YMaps>
          <ul
            style={{
              marginTop: "20px",

              columnWidth: "300px",
            }}
          >
            {productionPrograms?.map((item, index) => (
              <li style={{}} key={index}>
                <a
                  href={`${addressServer}${item.file[0].url}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}


// import React, { useEffect, useState } from "react";
// import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
// import { motion } from "framer-motion";
// import { Spin, Alert } from "antd"; 
// import TopImage from "../../components/TopImage";
// import img37550ba6c53ac1236dc634e6c4f22cc1 from "../../img/37550ba6c53ac1236dc634e6c4f22cc1.jpg";

// export default function ProductionPrograms2025() {
//   const [productionPrograms, setProductionPrograms] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

//   useEffect(() => {
//     const fakeUrl = "/api/fake-url-for-now";

//     // Имитация запроса к API
//     setTimeout(() => {
//       // Пока данных нет, оставляем массив пустым
//       setProductionPrograms([]);
//       setIsLoading(false); // Загрузка завершена
//     }, 2000); // Имитация задержки в 2 секунды
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage
//         image={img37550ba6c53ac1236dc634e6c4f22cc1}
//         title={"Производственные программы на 2025 год"}
//       />
//       <div className="page-grid__content" id="content">
//         <div className="text-area">
//           {/* Если данные загружаются, показываем спиннер */}
//           {isLoading ? (
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "400px",
//               }}
//             >
//               <Spin size="large" tip="Загрузка данных..." />
//             </div>
//           ) : productionPrograms.length === 0 ? (
//             // Если данных нет, показываем заглушку
//             <Alert
//               message="Раздел обновляется..."
//               description="Данные временно недоступны. Пожалуйста, зайдите позже."
//               type="info"
//               showIcon
//               style={{ margin: "20px 0" }}
//             />
//           ) : (
//             // Если данные есть, отображаем карту и список
//             <>
//               <YMaps>
//                 <Map
//                   state={{
//                     center: [55.754475, 37.621869],
//                     zoom: 8,
//                     behaviors: ["scrollZoom", "drag"],
//                   }}
//                   className="yandex-map"
//                   modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
//                 >
//                   <ZoomControl />
//                   {productionPrograms?.map((item, index) => (
//                     <Placemark
//                       key={index}
//                       geometry={{
//                         type: "Point",
//                         coordinates: [item.latitude, item.longitude],
//                       }}
//                       properties={{
//                         balloonContent: `<div className="ballon-down">
//                                               <p style="color: #000; margin-bottom: 5px">Производственная программа ${item.name}</p>
//                                               <a href="${item.file[0].url}" rel="noopener noreferrer" target="_blank">Посмотреть</a>
//                                           </div>`,
//                         iconContent: `${item.name}`,
//                         hintContent: `${item.name}`,
//                       }}
//                       options={{
//                         preset: "islands#orangeStretchyIcon",
//                       }}
//                     />
//                   ))}
//                 </Map>
//               </YMaps>
//               <ul
//                 style={{
//                   marginTop: "20px",
//                   columnWidth: "300px",
//                 }}
//               >
//                 {productionPrograms?.map((item, index) => (
//                   <li key={index}>
//                     <a
//                       href={`${item.file[0].url}`}
//                       rel="noopener noreferrer"
//                       target="_blank"
//                     >
//                       {item.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }
