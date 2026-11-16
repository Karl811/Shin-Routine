# Bàn giao Shin routine cho công cụ AI tiếp theo

## App này là gì?
Ứng dụng web/PWA tiếng Việt cho học viên rèn luyện thói quen nhỏ. Chạy tĩnh trên GitHub Pages; không có máy chủ dữ liệu, tài khoản hay quy trình biên dịch. Có 14 thói quen, bốn trang Hôm nay / Tuần / Hành trình / Thư viện; nhật ký, check-in, thẻ hai mặt, Lửa, bậc thẻ (luật v2), cây thành tựu, thư, 5 bài học, Pomodoro, tập thở và game.

Dữ liệu nằm trên thiết bị/trình duyệt. Mã lớp Demo-KZ dùng dữ liệu minh họa. Khác địa chỉ web có thể khác vùng dữ liệu. Đừng suy luận rằng dữ liệu đã mất chỉ vì chuyển sang địa chỉ xem thử khác.

## Mốc hiện tại
- **M.Claude.3.3.40 (mượt):** SECTION batch40 cuối design-system.js/.css; extensions.js: tay nắm gắn đồng bộ, lùi về tab/bước đã xem không dựng lại hộp thoại (silent40); Senpai kể về thẻ; thanh điều hướng 64px.
- **M.Claude.3.3.39 (font):** Be Vietnam Pro cho nội dung, Nunito cho tiêu đề/nút/số/nhãn — styles/fonts39.css + SECTION batch39 cuối design-system.css; SVG/canvas giữ Roboto Flex.
- **M.Claude.3.3.38 (đợt 3):** SECTION batch38 (design-system.js/.css): Thư viện mới (ô tìm `LIB38Q`/`HOW38Q`, `KW38`, `match38`/`filt38`, thẻ nổi bật `hero38`, `lesTab38`), Sổ tay › Tiến bộ `nbReview38`, Thẻ thành tựu `.ach38`, chữ câu công thức 18px.
- **M.Claude.3.3.37 (đợt 2):** SECTION batch37 (design-system.js/.css): menu ⋯ khi xem thẻ (Sửa công thức · Tạm dừng/Tiếp tục rèn · Cất thẻ), tạm dừng = thẻ vẫn trên tay không tính ngày; bước 1 tạo thẻ riêng gọn (`cuStepName`, `.cu37`); bỏ câu lấy từ lời Thầy ở Bài 3, Bài 5.
- **M.Claude.3.3.36 (sửa lỗi đợt 1):** SECTION batch36 (design-system.js/.css): chặn dán ô ghi chú hằng ngày, chặn sao chép chữ trang, Senpai quay lại thẻ, Sổ tay đổi tab mượt, hướng dẫn mở lại; tab Trải nghiệm; chọn thẻ không hiện tab.
- **M.Claude.3.3.35 (màu icon nhẹ):** chỉ đổi 10 cặp --m3c/--m3o trong SECTION m3-habit-icons; ô chọn màu thẻ tự tạo theo cùng tông.
- **M.Claude.3.3.34 (icon M3):** SECTION m3-habit-icons (design-system.js/.css) — glyph/flowIcon/bandCardIcon/m3HabitIcon+mi dùng Material Symbols Rounded SVG trong khung vuông tonal theo nhóm; SECTION sheet-sticky-head sửa tiêu đề dính trong hộp thoại kiểu cũ.
- **M.Claude.3.3.33 (game, phần 1):** Tung thói quen tràn màn hình, giao diện M3, hộp ném GAME33_BOX/GAME33_LABELS (phong cách hộp cũ, nhiều cỡ), HOOP_TOP và xếp hộp boxScaleNow trong initGameWorld; Pomodoro và Tập thở đã bỏ khỏi giao diện (mã còn, không lối vào); thẻ game ở Công cụ là shinGameCard33.
- **M.Claude.3.3.32 (luật v2, đợt 3 chữ):** LESSONS b1/b4/b5 app, LV hình bài 1/4/5, BEN32 (gợi ý ích lợi) + SECTION rules-v2-text, thuật ngữ “Bậc” thay “Cấp”. Chờ duyệt chữ bằng Excel. Xem HANDOFF.md mục 0.
- **M.Claude.3.3.31 (luật v2, đợt 2 giao diện):** SECTION rules-v2-ui cuối scripts/rules-v2.js và design-system.css (thẻ duy trì ở Hôm nay, Shin hỏi khi mở app, Lửa tuần trên Thẻ tuần); offerTier = câu hỏi chỉnh công thức; masterShow = hỏi sang Duy trì; vuốt mở màn hình ghi nhận đủ 3 nút. Xem HANDOFF.md mục 0.
- **M.Claude.3.3.30 (luật rèn luyện v2, đợt 1 logic lõi):** mọi cách tính Lửa/ngày nghỉ/bậc/thẻ duy trì nằm ở `scripts/rules-v2.js` (r2Calc, r2Info, r2Sync, r2KeepState, r2Week). `streak()` trả Lửa, `daysAt()` trả số ngày/lần v2, `ready()` luôn false (tự lên bậc), `vitality()` = r2KeepState. Đã bỏ mục tiêu tuần, thử thách tuần, XP, chuỗi riêng, xác nhận bạn/GV, mã GV, chế độ GV, Nâng việc. Xem HANDOFF.md mục 0.
- **M.Claude.3.3.29 (bản final, mặt sau 8 hình mới, đã bỏ mọi trích dẫn lời Thầy):** "Cách làm" bằng hình cho đủ 14/14 thói quen và 5 bài "Nền tảng rèn luyện" (mục LV trong how-visual.js) trong `scripts/how-visual.js`; xem mục 0 của HANDOFF.md. Các dòng dưới mô tả gốc M3.3.20-5S.2.
- Giao diện/chức năng: M3.3.20.
- Gói bảo trì/cache: **M3.3.20-5S.2 — bản chốt**, ngày 14/11/2026; 52 tệp.
- Gốc trực tiếp của lần này: M3.3.20-5S (cache 5S.1). Gốc lịch sử của lần dọn 5S là M3.3.19 GitHub 79 tệp.
- Đã hoàn thành yêu cầu cuối: áp dụng 7 hình vẽ lại đã duyệt; 6 chọn **6A cầu đá trong sương sớm**, 7 chọn **7B hoa và cánh bướm**. Danh sách đầy đủ và hướng dẫn phiên sau ở HANDOFF.md.
- **Không dùng M3.3.21-5S-preview làm gốc.** Người dùng đã tạm bỏ bản thử minh họa “Cách làm” của Quan sát–Memo, 5S và Lắng nghe–Sửa sai; không đưa lại vào app khi chưa có yêu cầu mới.
- Yêu cầu 5S: dọn an toàn, ít tệp hơn, dễ bàn giao AI; giữ giao diện, nội dung, dữ liệu và cách tính hiện có.
- Hệ chữ chính: tiêu đề trang 22, popup 20, tiêu đề mục 18, nội dung 16, nhãn 14, chú thích 12 px; nội dung chính trên thẻ 18 px. Bộ M3.3.19 đã bỏ cơ chế đo rồi tăng/giảm từng chữ bằng JavaScript.
- Các luồng nhiều bước dùng shinFlowProgress: thanh 4px, tên bước, Bước x/y. Đây không phải cách tính ngày rèn.

## Bản đồ nơi sửa
| Tệp | Trách nhiệm |
| --- | --- |
| index.html | Điểm vào; thứ tự CSS và classic script |
| scripts/core.js | Thư/tem nền, nội dung nền và phần lõi: trạng thái, lưu/khôi phục, tính tiến độ, sự kiện chính |
| scripts/interface.js | Khung M3, popup, Cách làm, bài học, sổ tay, focus; tương thích dữ liệu |
| scripts/habits.js | Luồng thói quen, mục tiêu, hành trình/cây, mẫu công thức, hai mặt thẻ |
| scripts/interaction.js | Điều hướng, cử chỉ, check-in và thư viện/nhìn lại |
| scripts/extensions.js | Pomodoro, nối game, lịch sử Back/cuộn; danh mục 14 thói quen hiện tại; các tinh chỉnh; tập thở |
| design-system.js / .css | Thành phần và chữ dùng chung; lời chào ngắn, header, tiến độ bước, responsive |
| styles/base.css | Font cục bộ và nền giao diện cũ vẫn được sử dụng |
| styles/components.css | Thành phần M3 nền và bố cục chung |
| styles/habits.css | Thói quen, thẻ, hành trình, check-in, thư viện, cử chỉ |
| styles/extensions.css | Bố cục tinh chỉnh và công cụ thở |
| scripts/how-visual.js | M.Claude.3.3.22: hình trong “Cách làm” (tranh đôi, khung bước, cặp Nên/Tránh, Shin mách nhỏ, hình động) và Thực tập type spot; bọc openHow/prDraw/prAct |
| scripts/rules-v2.js | M.Claude.3.3.30: luật rèn luyện v2 (Lửa, ngày nghỉ, bậc, thẻ duy trì, chuyển dữ liệu cũ, mừng lên bậc); bọc save/writeRecord/undoRecord29/load/applyRestore32/closeOv |
| boot.js | Chỉ khởi động sau khi các phần mở rộng đã đăng ký; hiện thông báo lên bậc lần đầu ở v2 (r2Notice) |
| habit-game.html, assets/game/, design-game.css | Tài liệu iframe game riêng; không cộng tiến độ rèn khi chơi |
| sw.js, manifest.webmanifest | Cache offline và cài PWA |

Trong các tệp đã gom, tìm `SECTION: tên-tệp-cũ` để đi đúng vị trí. source-map.json ghi đầy đủ đường chuyển tệp. Nội dung hiện hành 14 thói quen nằm ở SECTION curriculum14.js; không lấy danh mục nền cũ trong core.js làm chuẩn duy nhất.

## Phụ thuộc quan trọng
App dùng global và các hàm bọc: phần sau có thể lưu hàm trước rồi gọi lại nó. Giữ thứ tự core → interface → habits → interaction → extensions → design-system → how-visual → rules-v2 → boot. Đây vẫn là kiến trúc mở rộng theo lớp, chưa chuyển thành module độc lập. Đừng xóa một hàm chỉ vì thấy nó bị gán lại.

Các vùng chưa dọn triệt để: các lớp CSS nền và nhiều hàm bọc còn phụ thuộc nhau; một số định nghĩa nội dung cũ còn làm nền cho khôi phục/bài học hoặc được biến đổi thành danh mục mới. Không tuyên bố rằng mã cũ đã được loại hết. Muốn làm phẳng từng luồng, cần truy vết hàm bọc và đối chiếu đầy đủ riêng cho luồng đó.

## Khi nhận yêu cầu mới
1. Đọc HANDOFF.md để biết việc đã chốt và phạm vi đang tạm dừng. Hiện không có hạng mục đã duyệt nào còn chờ thực hiện. Nhận yêu cầu mới rồi xác định người dùng muốn đổi giao diện, nội dung đào tạo, quy tắc tiến độ hay cấu trúc dữ liệu.
2. Đọc AGENTS.md và phần mã tương ứng; sửa trên bản sao.
3. Ưu tiên sửa nơi chịu trách nhiệm, không tạo thêm một tệp vá cho từng yêu cầu nhỏ.
4. Kiểm tra dữ liệu cũ, mobile và offline; cập nhật ghi chú bàn giao. Nếu công cụ không kiểm tra được Safari/điện thoại thật, nói rõ.

## Tình trạng kiểm tra
Xem CHANGELOG.md và VALIDATION.json trong chính gói này để biết các kiểm tra đã thực hiện, không suy diễn từ hướng dẫn kiểm tra thành kết quả đã đạt.

## Thẻ — thay đổi đã duyệt ở M3.3.20
Mặt sau 14 thẻ dùng xanh #173F79 và chữ xanh trắng theo mẫu duyệt; 1/4 phía trên là minh họa riêng. Renderer và bộ hình nằm trong design-system.js; bố cục trong design-system.css. scripts/habits.js gọi shinCardFaces, scripts/interaction.js xử lý xoay ổn định, scripts/extensions.js đo khung và nhớ cuộn. Hai mặt có DOM thường trú; mặt ẩn inert/aria-hidden; không chọn phần tử .flow-paper đầu tiên để suy ra mặt hiện tại. Mặt sau cuộn ở .shin-back-copy. Thẻ tự tạo tiếp tục có mặt sau riêng, chưa tự tạo minh họa cho nội dung tùy ý.

Ở bản chốt 5S.2, chỉ thay 7 mục som, 5s, chitieu, vandong, viecko, horenso, giup trong SHIN_BACK_ART và thêm SHIN_BACK_ART_VIEWBOX để giữ tỷ lệ SVG. Bảy hình còn lại giữ nguyên. Không đổi CSS, nội dung câu Nhật, phiên âm, nghĩa, mặt trước, hiệu ứng lật hay các tệp scripts/*.js. Hình được lưu nội tuyến đầy đủ trong gói, không cần các thư mục xem mẫu ở phiên trước. Tên gradient có tiền tố riêng theo thói quen, tránh trùng ID.
