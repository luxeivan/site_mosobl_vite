import { Button, Flex, Typography, theme } from "antd"
import { useCookies } from "react-cookie";


export default function Cookie() {
    const [cookies, setCookie] = useCookies(['cookie'])
    const token = theme.useToken().token
    console.log(token);

    if (cookies.cookie === "Y") return false
    const addCookie = () => {
        setCookie('cookie', "Y", { maxAge: 30 * 24 * 60 * 60 })
    }
    return (
        <div style={{ position: "fixed", zIndex: 500, maxWidth: 400, padding: 20, color: "#fff", left: 20, bottom: 20, backgroundColor: token.colorPrimary, borderRadius: 10 }}>
            <Flex gap={20} wrap={"wrap"}>
                <Typography.Paragraph style={{ color: "#fff", fontSize: 20 }}>
                    На сайте осуществляется обработка файлов cookie с использованием Яндекс Метрика. Нажимая на кнопку "Да, согласен", вы даете согласие на их обработку.
                </Typography.Paragraph>
                <Button style={{ fontSize: 20 }} onClick={addCookie}>Да, согласен</Button>
            </Flex>
        </div>
    )
}