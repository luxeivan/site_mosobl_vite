import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import TopImage from "../../../components/TopImage";
import img7705c92ee469adb3142aa609f3e9e15a from "../../../img/7705c92ee469adb3142aa609f3e9e15a.jpg";
import { addressServer } from "../../../config";
import axios from "axios";
import pdf from "../../../img/pdf.svg";
import doc from "../../../img/doc.svg";
import docx from "../../../img/docx.svg";
import rar from "../../../img/rar.svg";
import xls from "../../../img/xls.svg";
import rtf from "../../../img/rtf.svg";
import Container1600 from "../../../components/Container1600";
const type = {
    pdf,
    doc,
    docx,
    rar,
    xls,
    rtf,
};

export default function PassportsCommercialServices() {
    const [passports, setPassports] = useState()
    useEffect(() => {
        axios.get(`${addressServer}/api/dopservis-pasporta?populate=files`)
            .then(res => {

                if (res.data.data) {
                    console.log(res.data.data);
                    setPassports(res.data.data)
                }
            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <TopImage title={"Паспорта коммерческих услуг"} image={img7705c92ee469adb3142aa609f3e9e15a} />
            <Container1600>

                <div className="page-grid" style={{ marginTop: 40, marginBottom: 40 }}>
                    <ul>
                        {passports &&
                            passports.files?.sort((a, b) => a.name - b.name).map((item, index) => (
                                <li key={index} className="page-grid__content__li">
                                    <a
                                        className="doc-line"
                                        href={`${addressServer}${item.url}`}
                                        download=""
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <div className="doc-line__wrap-icon">
                                            <img
                                                src={type[item.ext.slice(1)]}
                                                alt={`icon ${item.ext.slice(1)}`}
                                            />
                                        </div>
                                        <div className="doc-line__wrap-text">
                                            <span className="doc-line__name">{`${item.name}. ${item.alternativeText}`}</span>
                                            <span className="doc-line__file-info">
                                                {/* {item.ext.slice(1)}{" "} */}
                                                {item.size > 1024 ? `${(item.size / 1000).toFixed(2)} МБ` : `${Math.round(item.size)} КБ`}
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>
            </Container1600>
        </motion.div>
    );
}
