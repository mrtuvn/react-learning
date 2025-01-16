import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    console.log("test");
    return () => {
      console.log("clean");
    };
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h2>Chào Tú,</h2>

        <p>
          Đến năm 2025, thị trường công nghệ, đặc biệt là lĩnh vực Frontend,
          tiếp tục phát triển với tốc độ nhanh chóng. Để tăng khả năng cạnh
          tranh, kỹ sư Frontend cần chủ động cập nhật kiến thức và kỹ năng mới.
          Dưới đây là những điểm quan trọng bạn nên tập trung:
        </p>

        <dl>
          <dt className="text-bold mb-2 font-black underline">
            1. Nâng cao kiến thức nền tảng:
          </dt>
          <dd>
            Hiểu sâu hơn về JavaScript: Không chỉ dừng lại ở việc sử dụng các
            framework, bạn cần hiểu rõ về cơ chế hoạt động của JavaScript, bao
            gồm: Event Loop: Cách JavaScript xử lý các sự kiện bất đồng bộ.
            Closures, Prototypal Inheritance: Các khái niệm nâng cao giúp viết
            code hiệu quả hơn. Performance Optimization: Các kỹ thuật tối ưu
            hiệu suất JavaScript. CSS Architecture: Nắm vững các phương pháp tổ
            chức CSS như BEM, Atomic CSS, CSS Modules để code dễ bảo trì và mở
            rộng.
          </dd>
          <dt className="text-bold mb-2 font-black underline">
            2. Làm chủ các Framework và thư viện hiện đại:
          </dt>
          <dd>
            React Server Components: Tìm hiểu về cách React Server Components
            thay đổi cách xây dựng ứng dụng React, cải thiện hiệu suất và SEO.
            Các framework mới nổi: Theo dõi và tìm hiểu các framework mới có
            tiềm năng như SolidJS, Svelte, Astro. State Management nâng cao: Nắm
            vững các pattern và kỹ thuật quản lý state phức tạp, ví dụ như sử
            dụng Zustand, Jotai, Recoil.
          </dd>
          <dt className="text-bold mb-2 font-black underline">
            3. Tập trung vào trải nghiệm người dùng (UX) và khả năng tiếp cận
            (Accessibility):
          </dt>
          <dd>
            Web Accessibility (WCAG): Hiểu rõ các nguyên tắc và tiêu chuẩn về
            khả năng tiếp cận web để xây dựng ứng dụng thân thiện với mọi người
            dùng, bao gồm cả người khuyết tật. Core Web Vitals: Nắm vững các chỉ
            số Core Web Vitals và cách tối ưu chúng để cải thiện trải nghiệm
            người dùng và SEO. Micro-interactions và Animation: Sử dụng
            animation và micro-interactions một cách hợp lý để cải thiện UX và
            tạo sự thu hút cho ứng dụng.
          </dd>
          <dt className="text-bold mb-2 font-black underline">
            4. Phát triển kỹ năng liên quan đến hiệu năng và bảo mật:
          </dt>
          <dd>
            Web Performance Optimization: Nâng cao kiến thức về tối ưu hiệu suất
            web, bao gồm: Code Splitting, Tree Shaking: Giảm thiểu kích thước
            bundle. Image Optimization: Tối ưu hình ảnh để giảm thời gian tải
            trang. Caching Strategies: Sử dụng caching hiệu quả để cải thiện tốc
            độ. Web Security: Hiểu biết về các lỗ hổng bảo mật phổ biến như XSS,
            CSRF và cách phòng tránh chúng.
          </dd>
          <dt className="text-bold mb-2 font-black underline">
            5. Khám phá các công nghệ mới:
          </dt>
          <dd>
            WebAssembly: Tìm hiểu về WebAssembly và tiềm năng của nó trong việc
            mang lại hiệu suất cao cho các ứng dụng web. Progressive Web Apps
            (PWA): Nắm vững các kỹ thuật xây dựng PWA để tạo ra trải nghiệm
            giống như ứng dụng di động trên web. Web Components: Tìm hiểu về Web
            Components để xây dựng các component tái sử dụng trên nhiều dự án.
            AI và Machine Learning trong Frontend: Tìm hiểu cách tích hợp các
            tính năng AI và Machine Learning vào giao diện người dùng, ví dụ như
            gợi ý sản phẩm, chatbot.
          </dd>
          <dt className="text-bold mb-2 font-black underline">
            6. Phát triển kỹ năng mềm:
          </dt>
          <dd>
            Khả năng giải quyết vấn đề: Kỹ năng phân tích và giải quyết vấn đề
            một cách hiệu quả. Khả năng làm việc nhóm: Làm việc tốt trong môi
            trường nhóm, giao tiếp hiệu quả với đồng nghiệp. Khả năng tự học:
            Chủ động tìm hiểu và cập nhật kiến thức mới. Tư duy phản biện: Đánh
            giá và phân tích thông tin một cách khách quan.
          </dd>
          <dt className="text-bold mb-2 font-black underline">
            7. Xây dựng portfolio mạnh:
          </dt>
          <dd>
            Tham gia các dự án Open Source: Đóng góp vào các dự án mã nguồn mở
            để học hỏi kinh nghiệm và xây dựng portfolio. Xây dựng các dự án cá
            nhân: Tạo ra các dự án thực tế để thể hiện kỹ năng và kiến thức.
            Viết blog hoặc chia sẻ kiến thức: Chia sẻ kiến thức trên blog cá
            nhân hoặc các nền tảng khác để xây dựng thương hiệu cá nhân.
          </dd>
          Tóm lại: Để cạnh tranh trong thị trường Frontend năm 2025, bạn cần kết
          hợp giữa việc nắm vững kiến thức nền tảng, làm chủ các công nghệ hiện
          đại, tập trung vào trải nghiệm người dùng và phát triển kỹ năng mềm.
          Hãy luôn chủ động học hỏi và cập nhật kiến thức mới để không bị tụt
          hậu. Hy vọng những thông tin này sẽ giúp bạn định hướng được con đường
          phát triển sự nghiệp Frontend của mình. Chúc bạn thành công!
        </dl>
      </div>
    </>
  );
};

export default HomePage;
