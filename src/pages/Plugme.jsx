import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TopImage from "../components/TopImage";



export default function Plugme() {

  const getPlugmeToken = async () => {
    const res = await axios.post('https://plugme.ru/oauth2/token', {
      client_id: process.env.REACT_APP_PLUGME_CLIENT_ID,
      client_secret: process.env.REACT_APP_PLUGME_CLIENT_SECRET,
      grant_type: 'client_credentials',
      scope: 'plugme'
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    //console.log(res.data.access_token)
    Cookies.set('plugmetoken', res.data.access_token, { expires: 1 })
    getChargePoint()
  }
  const getChargePoint = async () => {
    //console.log(Cookies.get('plugmetoken'))
    try {
      const res = await axios.post('https://plugme.ru/api/v1/charge_point/list', {}, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('plugmetoken')}`
        }
      })
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }

  }
  useEffect(() => {
    if (Cookies.get('plugmetoken')) {
      getChargePoint()
      Cookies.get('plugmetoken')
    } else {
      getPlugmeToken()
    }


  }, [])
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage title={""} />
      <div className="page-grid__content">
        <h2>Plugme</h2>
        <Link to="/" className="button__back" style={{ width: "170px", marginLeft: "0", marginTop: "20px", marginBottom: "50px" }}>
          Перейти на главную
        </Link>
      </div>
    </motion.div>
  )
}
