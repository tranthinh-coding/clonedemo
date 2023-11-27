import logoWhite from "@/assets/logo_white.png";

import './footer.scss'
import { Container } from '../container';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logoWhite} alt="White Logo" />
          </div>
          <div className="footer-content">
            <h4>CƠ SỞ HÀ NỘI</h4>
            <div>Số 456 Minh Khai, P.Vĩnh Tuy, Q.Hai Bà Trưng, TP.Hà Nội</div>
            <div>Số 218 Đường Lĩnh Nam, Q.Hoàng Mai, TP.Hà Nội</div>
            <div>
              <span>024.38621504</span>
              <span>024.38621504</span>
            </div>
            <div>uneti.edu.vn</div>
          </div>
          <div className="footer-content">
            <h4>CƠ SỞ NAM ĐỊNH</h4>
            <div>Số 353 Trần Hưng Đạo, P.Bà Triệu, TP.Nam Định</div>
            <div>Khu xưởng Thực hành: Phường Mỹ Xá, TP.Nam Định</div>
            <div>
              <span>0228.3848706</span>
              <span>0228.3845747</span>
            </div>
            <div>uneti.edu.vn</div>
          </div>
        </div>
      </Container>
      <div className="copyright">
        © Copyright Trường Đại học Kinh tế - Kỹ thuật Công nghiệp
      </div>
    </footer>
  )
}
