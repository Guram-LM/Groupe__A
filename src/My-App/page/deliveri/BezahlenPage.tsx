import { useState } from 'react'
import BezahlMetode from './BezahlMetode'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import type { CourierResponseType } from '../corurier/CourierInterface'
import type { BeschtelunType } from './DeliverRequest'
import { useAppDispatch } from '../../store/ReduxHook'
import { createUser } from '../../store/thanks/post/Post-Thamk'


export interface BeschtelenType extends BeschtelunType {
  courier: CourierResponseType;
  bezhalen: string;
  Beschäftigtyeit: string
}

const BezahlenPage = () => {
    const [bezahlMetode, setBezahlMetode] = useState("")

    const lokation = useLocation()
    const {beschtelungData, courier} = lokation.state as {courier: CourierResponseType, beschtelungData: BeschtelunType}

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const sendData = async () => {
        if (!bezahlMetode) {
            toast.error("გთხოვ აირჩიე გადახდის მეთოდი")
            return
        }

        const Beschäftigtyeit = new Date(
            Date.now() + (beschtelungData.voraussichtlicheLieferzeit ?? 0) * 60000).toISOString();


        const sendData: BeschtelenType = {
            ...beschtelungData, courier,
            bezhalen: bezahlMetode,
            Beschäftigtyeit
        }

        console.log(sendData)
        
        const action = await dispatch(createUser({role:"beschtelen", sendData: sendData}))
        if(createUser.fulfilled.match(action)){
            toast.success("შეკვეთა მიღებულია")
            navigate("/user/userProfile")
        }
    }
  return (
    <div>

        <h2>გადახდის გვერდი</h2>

        <p>კურიერი: {courier.firstName} {courier.lastName}</p>
        <p>წონა: {beschtelungData.gewicht} კგ</p>
        <p>მიტანის დრო: {beschtelungData.voraussichtlicheLieferzeit} წთ</p>
        <p>ღირებულება: {beschtelungData.preis} ₾</p>
        <p>აღების მისამართი: {beschtelungData.abholAdresse}</p>
        <p>მიტანის მისამართი: {beschtelungData.zustellAdresse}</p>

        
        <h2>გადახდის გვერდი</h2>

        <BezahlMetode bezahlMetode={bezahlMetode} setBezahlMetode={setBezahlMetode} sendData={sendData} />

    </div>
  )
}

export default BezahlenPage