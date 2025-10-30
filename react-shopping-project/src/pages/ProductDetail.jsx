import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { faMinus, faPlus, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectSize, setSelectSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sugonhwang/react-project-3/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    if (!selectSize) {
      alert("사이즈를 선택해주세요");
      return;
    }
    alert(`${product?.title}\n사이즈: ${selectSize}\n수량: ${quantity}개\n장바구니에 추가되었습니다!`);
  };

  return (
    <Container className="product-detail-container">
      <Row>
        <Col lg={6} md={6} sm={12} className="product-image-col">
          <img src={product?.img} alt={product?.title} className="product-detail-image" />
        </Col>
        <Col lg={6} md={6} sm={12} className="product-info-col">
          <div className="product-detail-content">
            {/* 배지 */}
            <div className="product-badges">
              {product?.choice && <span className="badge conscious-badge">Conscious Choice</span>}
              {product?.new && <span className="badge new-badge">신제품</span>}
            </div>

            {/* 상품명 */}
            <h2 className="product-title">{product?.title}</h2>

            {/* 가격 */}
            <div className="product-price">₩{product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>

            {/* 사이즈 선택 */}
            <div className="size-selection">
              <label className="selection-label">사이즈 선택</label>
              <div className="size-buttons">
                {product?.size?.map((size) => (
                  <button key={size} className={`size-btn ${selectSize === size ? "selected" : ""}`} onClick={() => setSelectSize(size)}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 수량 선택 */}
            <div className="quantity-selection">
              <label className="selection-label">수량</label>
              <div className="quantity-control">
                <button className="quantity-btn" onClick={decreaseQuantity} disabled={quantity <= 1}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="quantity-display">{quantity}</span>
                <button className="quantity-btn" onClick={increaseQuantity} disabled={quantity >= 10}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>

            {/* 장바구니 담기 버튼 */}
            <Button className="add-to-cart-btn" onClick={addToCart}>
              <FontAwesomeIcon icon={faShoppingBag} /> 장바구니에 추가
            </Button>

            {/* 상품 정보 아코디언 */}
            <Accordion defaultActiveKey="0" className="product-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>상품 정보</Accordion.Header>
                <Accordion.Body>고품질 소재로 제작된 제품입니다. 편안한 착용감과 세련된 디자인이 특징입니다. 일상복으로도, 특별한 날에도 완벽하게 어울립니다.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>배송 및 반품</Accordion.Header>
                <Accordion.Body>
                  <strong>배송:</strong> 주문 후 2-3일 내 배송됩니다.
                  <br />
                  <strong>반품:</strong> 상품 수령 후 14일 이내 반품 가능합니다. (미착용, 택 부착 상태)
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>소재 및 관리</Accordion.Header>
                <Accordion.Body>
                  <strong>소재:</strong> 면 100%
                  <br />
                  <strong>세탁:</strong> 찬물 세탁, 건조기 사용 금지, 다림질 저온
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
