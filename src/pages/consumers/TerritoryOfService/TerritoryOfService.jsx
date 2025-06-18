import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import TopImage from '../../../components/TopImage';
import img2fde80ac63c76cbc7aa002fb91d2bd94 from "../../../img/2fde80ac63c76cbc7aa002fb91d2bd94.jpg";
import { Button, Descriptions, Flex, Input, Modal, Table, Typography } from 'antd';
import { addressServer } from "../../../config";
import { chargingAddressServer } from "../../../config";
import { strapi } from '@strapi/client';
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import debounce from "lodash/debounce";

import styles from "./TerritoryOfService.module.css"
import axios from 'axios';
import { Link } from 'react-router';

// const iconImageSize = [130 / 4, 221 / 4];
const client = strapi({ baseURL: `${chargingAddressServer}/api` });

export default function TerritoryOfService() {
    const columns = [
        {
            title: 'Городской округ',
            dataIndex: 'cityDistrict',
            key: 'cityDistrict',
        },
        {
            title: 'Населенный пункт',
            dataIndex: 'locality',
            key: 'locality',
        },
        {
            title: 'Улица',
            dataIndex: 'street',
            key: 'street',
        },
        {
            title: '',
            dataIndex: 'key',
            key: 'action',
            render: key => <Button type='primary' onClick={() => {
                handlerOpenModal(key)
            }} ><span style={{ color: "white" }}>Уточнить номер дома</span></Button>,
        },
    ]
    const [territories, setTerritories] = useState([])
    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const [loadingCurrent, setLoadingCurrent] = useState(false)
    const [currentTerritory, setCurrentTerritory] = useState(null)
    const [currentFilial, setCurrentFilial] = useState(null)


    const [cityDistrict, setCityDistrict] = useState(false)
    const [locality, setLocality] = useState(false)
    const [street, setStreet] = useState(false)

    const [pagination, setPagination] = useState({
        pageSize: 10,
        current: 1
    })
    const [total, setTotal] = useState(undefined)
    const fetchTerritory = async (id) => {
        try {
            setCurrentTerritory(null)
            setLoadingCurrent(true)
            const getTerritories = client.collection('territories')
            const currTerritory = await getTerritories.findOne(id, {
                populate: "filial"
            })
            const filials = await axios.get(`${addressServer}/api/filialies`)
            // currTerritory.filial.data.attributes.name
            // console.log("filials", filials.data.data);
            // console.log("currTerritory", currTerritory.data.attributes.filial.data.attributes.name);
            let curFil = null
            if (filials.data.data && currTerritory.data?.attributes?.filial?.data?.attributes?.name) {
                curFil = filials.data.data.find(item => item.name.includes(currTerritory.data.attributes.filial.data.attributes.name))
                setCurrentFilial(curFil.documentId)
            } else {
                setCurrentFilial(null)
            }
            console.log("curFil", curFil);
            setCurrentTerritory({ ...currTerritory.data.attributes, key: currTerritory.data.id })
        } catch (error) {
            console.log("error", error)
            setLoadingCurrent(false)
        }
    }
    const fetchTerritories = async (cityDistrict = false, locality = false, street = false, pagination) => {
        try {
            setLoading(true)
            // const res = await axios.get(`https://nopowersupply.mosoblenergo.ru/station/api/territories?pagination[page]=${pagination.current}&pagination[pageSize]=${pagination.pageSize}`)
            const getTerritories = client.collection('territories')
            const arrTerritories = await getTerritories.find({
                sort: 'cityDistrict',
                pagination: {
                    page: pagination.current,
                    pageSize: pagination.pageSize
                },
                filters: {
                    cityDistrict: { $containsi: cityDistrict ? cityDistrict : undefined },
                    locality: { $containsi: locality ? locality : undefined },
                    street: { $containsi: street ? street : undefined },
                }
            })
            setTotal(arrTerritories.meta.pagination.total)
            setTerritories(arrTerritories.data?.map((item, index) => {
                // console.log(item);

                item.key = item.id
                return { ...item.attributes, key: item.key }
            }))
            setLoading(false)
        } catch (error) {
            console.log("error", error)
            setLoading(false)
        }
    }


    useEffect(() => {
        // console.log(territories);
        fetchTerritories(cityDistrict, locality, street, pagination)
    }, [total, pagination, cityDistrict, locality, street])
    // useEffect(() => {
    //     console.log(openModal);
    // }, [openModal])

    const handlerChange = (pagination) => {
        setPagination(pagination);
    };
    const handlerOpenModal = (docId) => {
        setOpenModal(docId)
        fetchTerritory(docId)
    }
    const changeValue = debounce((type, value) => {
        if (type === 'cityDistrict') {
            setCityDistrict(value)
        }
        if (type === 'locality') {
            setLocality(value)
        }
        if (type === 'street') {
            setStreet(value)
        }

    }, 1000)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <TopImage
                image={img2fde80ac63c76cbc7aa002fb91d2bd94}
                title={"Территория обслуживания сетевой организации"}
            />
            <div className="page-grid__content" id="content">
                <div className="row-docs-age">
                    <p className="row-docs-age__caption line-bottom">
                        Список адресов, обслуживаемых АО «Мособлэнерго»:
                    </p>
                </div>
                {/* <Flex gap={10} vertical>
                    <Flex gap={10} vertical>
                        <Typography.Text style={{ color: "gray" }}>
                            Городской округ:
                        </Typography.Text>
                        <Input placeholder='Городской округ' name='cityDistrict' onChange={(event) => {
                            setCityDistrict(event.target.value)
                        }} />
                        </Flex>
                        </Flex> */}
                <Typography.Paragraph>
                    <span style={{ color: "red", fontSize: 16 }}>Внимание!</span> Поиск чувствителен к заглавным буквам в словах.
                </Typography.Paragraph>
                <Flex gap={10} wrap={"wrap"} style={{ marginBottom: 20 }}>

                    <Input className={styles.input} placeholder='Городской округ' name='cityDistrict' onChange={(event) => {
                        changeValue("cityDistrict", event.target.value)
                    }} />
                    <Input className={styles.input} placeholder='Населенный пункт' name='locality' onChange={(event) => {
                        changeValue("locality", event.target.value)
                    }} />
                    <Input className={styles.input} placeholder='Улица' name='street' onChange={(event) => {
                        changeValue("street", event.target.value)
                    }} />
                </Flex>
                {territories &&
                    <Table
                        size='small'
                        scroll={{ x: true }}
                        columns={columns}
                        dataSource={territories}
                        loading={loading}
                        style={{ width: "100%" }}
                        pagination={{
                            current: pagination?.current,
                            pageSize: pagination?.pageSize,
                            total: total || 0,
                            showSizeChanger: { options: [
                                { value: 10, label: "10/стр." }, 
                                { value: 25, label: "25/стр." }, 
                                { value: 50, label: "50/стр." }, 
                                { value: 100, label: "100/стр." }
                            ] },
                            // pageSizeOptions: ["10", "25", "50", "100"],
                            showTotal: (total, range) =>
                                `${range[0]}-${range[1]} из ${total} всего`,
                            // onChange: handlerChange,
                            align: "center",
                        }}
                        onChange={handlerChange}
                        onRow={(record, rowIndex) => {
                            // console.log(record);

                            return {
                                onClick: (event) => {
                                    // console.log("onClick", event);
                                    handlerOpenModal(record.key)
                                }, // click row
                            };
                        }}
                    />
                }
            </div>
            <Modal
                open={!!openModal}
                footer={null}
                onCancel={() => { setOpenModal(false) }}
                title={"Информация по адресу"}
                width={1200}
            >
                {currentTerritory &&
                    <Descriptions column={1} bordered items={[
                        {
                            key: '0',
                            label: 'ПО',
                            children: currentTerritory.po,
                        },
                        {
                            key: '1',
                            label: 'Городской округ',
                            children: currentTerritory.cityDistrict,
                        },
                        {
                            key: '2',
                            label: 'Населенный пункт',
                            children: currentTerritory.locality,
                        },
                        {
                            key: '3',
                            label: 'Улица',
                            children: currentTerritory.street,
                        },
                        {
                            key: '4',
                            label: 'Номера домов',
                            children: currentTerritory.houseNumbers,
                        },
                        {
                            key: '5',
                            label: 'Примечание',
                            children: currentTerritory.note,
                        },
                    ]} />
                }

                {currentTerritory?.listFiasHouse?.length > 0 &&
                    (() => {
                        let latitude = 55.754475
                        let longitude = 37.621869
                        if ((latitude = currentTerritory.listFiasHouse[Math.round(currentTerritory.listFiasHouse.length / 2)]?.latitude) && (longitude = currentTerritory.listFiasHouse[Math.round(currentTerritory.listFiasHouse.length / 2)]?.longitude)) {
                            return < YMaps >
                                <Map
                                    state={{
                                        center: [
                                            currentTerritory.listFiasHouse[Math.round(currentTerritory.listFiasHouse.length / 2)]?.latitude,
                                            currentTerritory.listFiasHouse[Math.round(currentTerritory.listFiasHouse.length / 2)]?.longitude
                                        ],
                                        zoom: 16,
                                        behaviors: ["scrollZoom", "drag"],
                                    }}
                                    className="yandex-map"
                                    modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                                >
                                    <ZoomControl />
                                    {currentTerritory.listFiasHouse.map((item, index) => {
                                        return (
                                            <Placemark
                                                // onClick={(event) => {
                                                //     event.preventDefault()
                                                //     console.log(item.attributes.address)
                                                // }}
                                                key={index}
                                                geometry={{
                                                    type: "Point",
                                                    coordinates: [
                                                        item.latitude,
                                                        item.longitude,
                                                    ],
                                                }}
                                                properties={{
                                                    // balloonContent: `${item.houseNumber}`,
                                                    // iconContent: "X",
                                                    //hintContent: "Ну давай уже тащи",
                                                    //balloonContent: 'А эта — новогодняя',
                                                    iconContent: `${item.houseNumber}`,
                                                    hintContent: `${item.houseNumber}`,
                                                }}
                                                options={{
                                                    // iconLayout: "default#image",
                                                    preset: "islands#redStretchyIcon",
                                                    // Своё изображение иконки метки.
                                                    // iconImageHref: (() => {
                                                    //     if (item.attributes.disabled || item.statecode != "available") {
                                                    //         return chargingIco_dis
                                                    //     } else if (item.attributes.power == 22) {
                                                    //         return chargingIco22
                                                    //     } else if (item.attributes.power == 150) {
                                                    //         return chargingIco150
                                                    //     } else {
                                                    //         return chargingIco
                                                    //     }
                                                    // })(),
                                                    // iconImageSize,
                                                }}
                                            />
                                        );
                                    })}
                                </Map>
                            </YMaps>
                        } else {
                            return false
                        }

                    })()
                }
                {currentFilial &&
                    <Flex style={{ margin: 20 }} align='center' justify='center'>

                        <Link to={`/filials/${currentFilial}`}><Button type='primary'><span style={{ color: "white" }}>Перейти на страницу филиала</span></Button></Link>
                    </Flex>
                }
            </Modal>
        </motion.div >)
}
