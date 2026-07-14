/*
 * Schema.org (JSON-LD) cho DuoMen - Enzymax Duo Biotics
 * Dữ liệu cấu trúc cho Google & trợ lý AI. Không hiển thị cho người dùng.
 * Gồm: Organization (MHD Pharma) + Product (giá 500.000đ) + FAQPage (4 câu).
 */
(function () {
  var schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.enzymax.vn/duomen/#org",
        "name": "CÔNG TY CỔ PHẦN MHD PHARMA",
        "url": "https://www.enzymax.vn/duomen/",
        "logo": "https://www.enzymax.vn/duomen/images/logo-footer.png",
        "telephone": "+842866808366",
        "email": "info@mhdpharma.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Số 9B8-C9, Đường số 10, KDC Dương Hồng Garden House, Xã Bình Hưng",
          "addressLocality": "TP. Hồ Chí Minh",
          "addressCountry": "VN"
        },
        "sameAs": [
          "https://www.facebook.com/viennangkepDuo",
          "https://www.tiktok.com/@duomen.official",
          "https://zalo.me/2509048246650677428"
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.enzymax.vn/duomen/#product",
        "name": "Enzymax Duo Biotics (DuoMen)",
        "image": "https://www.enzymax.vn/duomen/images/hop-thuoc.png",
        "description": "Thực phẩm bảo vệ sức khỏe hỗ trợ tiêu hóa với công nghệ viên nang kép — cung cấp đồng thời 2 hệ Men trong 1 viên: Men tiêu hóa cho Dạ dày và Men vi sinh cho Ruột. Chứa 5 tỷ lợi khuẩn Lactobacillus plantarum và Prebiotic FOS, hỗ trợ tiêu hóa chất béo, chất đạm và tinh bột. Quy cách: hộp 2 vỉ x 10 viên nang kép.",
        "brand": { "@type": "Brand", "name": "DuoMen" },
        "category": "Thực phẩm bảo vệ sức khỏe",
        "manufacturer": { "@id": "https://www.enzymax.vn/duomen/#org" },
        "offers": {
          "@type": "Offer",
          "url": "https://www.enzymax.vn/duomen/",
          "priceCurrency": "VND",
          "price": "500000",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": { "@id": "https://www.enzymax.vn/duomen/#org" }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.enzymax.vn/duomen/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Trào ngược dạ dày có uống được DuoMen không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Người trào ngược dạ dày có thể dùng được DuoMen. Nên uống ngay đầu bữa ăn chính để hỗ trợ tiêu hóa tốt hơn. Nếu tình trạng trào ngược nặng, kèm đau rát hoặc kéo dài, nên thăm khám với chuyên gia y tế trước khi dùng sản phẩm."
            }
          },
          {
            "@type": "Question",
            "name": "Uống DuoMen cùng lúc với kháng sinh được không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Không nên uống cùng lúc với kháng sinh. Vì DuoMen có chứa lợi khuẩn sống, chúng có thể gặp bất lợi khi gặp kháng sinh. Do vậy, nên sử dụng cách kháng sinh ít nhất 2 tiếng để bảo toàn lợi khuẩn."
            }
          },
          {
            "@type": "Question",
            "name": "Người bị dị ứng thành phần nào cần lưu ý về DuoMen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DuoMen có chứa men tiêu hóa từ Nấm và men vi sinh. Nếu từng dị ứng với các thành phần này, vui lòng hỏi ý kiến chuyên gia y tế trước khi dùng sản phẩm."
            }
          },
          {
            "@type": "Question",
            "name": "Sử dụng sản phẩm trước hay sau khi uống rượu/bia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nên sử dụng trước khi dùng rượu bia để phòng ngừa các vấn đề tiêu hóa. Tuy nhiên, nếu bạn đã dùng rượu bia và đang có vấn đề tiêu hóa, nên bổ sung ngay 2 viên/ngày trong vòng 5 ngày đầu và 1 viên/ngày trong vòng 10 ngày tiếp theo để hệ tiêu hóa phục hồi và ổn định."
            }
          }
        ]
      }
    ]
  };

  var el = document.createElement("script");
  el.type = "application/ld+json";
  el.text = JSON.stringify(schema);
  document.head.appendChild(el);
})();
