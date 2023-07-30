import { useNavigate } from "react-router-dom";
// CSS
import '../App.css'
export default function Home() {
    const navigate = useNavigate();

    const navigateConsult = () => {
        navigate('/Consult')
    }
    return (
        <div className="container homePage">
            <div className="row ">
                <div className="col-lg-5 col-12">
                    <p className="pHome rounded-pill px-3 mb-2">คุณกำลังคิดมากอยู่รึเปล่า</p>
                    <h1 className="mb-3 fw-bold ">จองคิวปรึกษากับ ผู้ให้คำปรึกษาได้ตลอด <span className="hourColor">24 ชั่วโมง</span></h1>
                    <p className="text-secondary mb-3">หากคุณต้องการคนที่รับฟัง และช่วยให้คำแนะนำที่ดีกับคุณ เรามีทั้งผู้ให้คำปรึกษาที่ดี รวมถึงพื้นที่พูดคุย เพื่อนร่วมประสบการณ์เดียวกันกับคุณ</p>
                    <button type="button" className="btn btn-danger mt-3 fs-5" onClick={navigateConsult}>เริ่มปรึกษาเลย</button>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}