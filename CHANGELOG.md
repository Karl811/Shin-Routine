# Lịch sử và bàn giao

## M.Claude.3.3.39 — 15/11/2026 — Font chữ: Nunito (tiêu đề) + Be Vietnam Pro (nội dung)

Gốc M.Claude.3.3.38. Người dùng thấy font cũ (Roboto Flex) rõ nhưng đơn điệu; xem 2 vòng bản mẫu (3 phương án, rồi 3 cách ghép với Nunito) và chọn phương án A.

- Thêm `styles/fonts39.css` và 15 tệp woff2 trong assets/fonts: Nunito biến thiên (latin, latin-ext, vietnamese) và Be Vietnam Pro 400/500/600/700 (mỗi độ đậm 3 bộ). Giấy phép `NUNITO-OFL.txt`, `BE-VIETNAM-PRO-OFL.txt`. Tổng khoảng 300 KB, đăng ký trong sw.js CORE.
- SECTION batch39 (design-system.css): `--f` = Be Vietnam Pro; `--fh`/`--h` = Nunito. Nunito cho h1–h4, tiêu đề trang và hộp thoại, tên thẻ trong danh sách (Hôm nay, Đang duy trì, Thư viện, Cách làm), câu hỏi lớn (`.qlab`), ý chính bài học (`.lsbig`), nút (`.btn`, `.m3-button`, nút thẻ nổi bật), số liệu (Sổ tay, số bài), nhãn nhỏ (BẬC, KHI, MÌNH SẼ, nhãn mục). Đậm: tiêu đề 800, tên thẻ và nút 750, nhãn 800, số 850.
- Trang game dùng cùng font. Chữ trong hình SVG và ảnh xuất giữ Roboto Flex.
- Kiểm thử Chromium 390×844 và 320×640: Hôm nay, Tuần, Hành trình, Thư viện, thẻ (2 mặt), Cách làm, Bài học, Sửa công thức, Sổ tay, Check-in, Thẻ thành tựu, tạo thẻ riêng, game; font nạp đủ (Nunito, Be Vietnam Pro), dấu tiếng Việt hiển thị đúng; lặp lại kiểm thử đợt 2–3. Không lỗi JavaScript. Ghi nhận: ở 320px chữ “Không gặp dịp” trong Check-in xuống 2 dòng; thẻ ở màn hình 320×640 bị cắt đáy như bản trước (không do font).

## M.Claude.3.3.38 — 15/11/2026 — Đợt 3: Thư viện mới, “Shin nhìn lại tuần này”, Thẻ thành tựu nhẹ hơn

Gốc M.Claude.3.3.37. Toàn bộ ở SECTION batch38 (design-system.js/.css). Người dùng chốt: giữ thang Bị → Đam mê; tab Hành trình giữ nguyên, chỉ làm nhẹ Thẻ thành tựu khi chạm thẻ trên cây; làm lại Thư viện tab Thói quen và Bài học theo tinh thần thẻ game, M3.

- **Chữ câu công thức** khi thiết lập thói quen/thẻ riêng: 16 → 18px (`.sheet.wizard16 .sentence`); nơi khác không đổi.
- **Thư viện › Thói quen** (bọc `eveningLibrary`; tab Trải nghiệm vẫn gọi bản cũ): ô tìm kiểu M3; tìm không dấu, có từ khóa đời thường cho 14 thói quen (`KW38`), khớp đúng từ trước (“ngủ” không ra “người”), không có kết quả thì nới ra khớp đầu từ; chỉ cập nhật phần kết quả nên bàn phím không bị đóng. Chip lọc có số. Thẻ nổi bật đổi theo ngày, dùng hình mặt sau thẻ trên nền #173F79. Danh sách theo 4 nhóm + Thẻ tự tạo: icon M3 44px, tên, chấm + trạng thái (Đang rèn · Bậc n / Đã cất · Bậc n / Tạm dừng / Đang duy trì / Chưa rèn). “Chọn thẻ để rèn” dùng cùng danh sách và ô tìm.
- **Thư viện › Bài học**: thẻ nổi bật với hình đường 5 bậc đá (bài đã học có dấu tích, bài tiếp theo viền vàng), nút Bắt đầu/Học tiếp/Ôn lại; danh sách 5 bài; “Cách làm từng thói quen” thành ô 2 cột nhỏ gọn + ô tìm riêng.
- **Sổ tay › Tiến bộ** (bọc `nbSum`): “Shin nhìn lại tuần này” 7 phần; 6 ô số liệu cũ bỏ; phần viết trong bài học và memo gập lại.
- **Thẻ thành tựu** (bọc `openTreeCard30`, giữ ô “Một điều bạn muốn ghi nhớ” và nút lưu): đầu thẻ gọn, dòng thời gian, bỏ các khối nền đậm.
- Kiểm thử Chromium 390×844 và 1280×800 (Demo): tìm 15 từ mẫu, chip lọc, mở thẻ từ thẻ nổi bật và từ danh sách, Cách làm (tìm + mở), mở bài từ thẻ nổi bật, Chọn thẻ để rèn (tìm), Sổ tay (các phần, mở thẻ), Thẻ thành tựu (lưu kỷ niệm), bài học còn dở; lặp lại kiểm thử đợt 2 (menu ⋯, tạo thẻ). Không lỗi JavaScript. Chưa thử WebKit/điện thoại thật.

## M.Claude.3.3.37 — 15/11/2026 — Đợt 2: bỏ câu lấy từ lời Thầy, trang tạo thẻ gọn, nút ⋯ khi xem thẻ

Gốc M.Claude.3.3.36. Mã mới: SECTION batch37 cuối design-system.js và design-system.css.

- (14) **Bỏ câu lấy từ lời Thầy Lê Long Sơn** (core.js, LESSONS): Bài 3 bỏ “Thói lười có thể lây sang nhau.” và “Siêng năng cũng lây.” [T26 – V13], còn “Người xung quanh cũng là môi trường. Ngồi gần bạn chăm, mình cũng chăm hơn.”; Bài 5 bỏ “Khi đã thật sự muốn, mình tự học, tự làm mà không cần ai nhắc.” [T26 – V17], thay câu dẫn “Thử xem mình đang làm việc này với tâm thế nào:”. Giữ thang Bị→Đam mê (mô hình), thành ngữ 七転び八起き ở Bài 4. Đã rà 14 thẻ Cách làm, mặt sau, Senpai kể: không còn trích dẫn. Chú thích đầu LESSONS cập nhật. Liệt kê trong `Shin-routine-3.3.37_Duyet-chu-dot-2.xlsx`.
- (17) **Trang đầu tự tạo thẻ gọn hơn** (`cuStepName` trong core.js, CSS `.cu37`): bỏ dòng “Thẻ của riêng bạn”; ô tên nằm trong khung xem trước (nhãn nhỏ “Tên thói quen”, gạch chân); “Màu” cùng hàng 6 chấm 44px; biểu tượng 6 cột cao 44px; nhịp thành 2 nút liền (Hằng ngày | Khi gặp dịp) + 1 dòng chú thích. Vẫn chọn màu, biểu tượng; `cuRefresh`, gợi ý mẫu, chế độ sửa, nút Xóa giữ nguyên. Ở 390×844 cả bước vừa một màn hình.
- (28) **Nút ⋯ ở thanh dưới khi xem thẻ** (thẻ đang trên tay, không áp cho thẻ ở Thư viện/duy trì): menu M3 nổi phía trên với Sửa công thức (data-act edit) · Tạm dừng thẻ / Tiếp tục rèn · Cất thẻ (data-act unslot). Đóng bằng chạm ra ngoài, Esc, mũi tên lên/xuống chuyển mục.
  - **Tạm dừng** = `status:'pause'`, thẻ vẫn trong khung (giữ chỗ), không tính ngày, không tính lỡ, không chặn +2 Lửa (r2TrainingNow, handList, activeIds đã loại thẻ pause từ trước). Mặt trước có nhãn “Tạm dừng”; nút chính đổi thành “Tiếp tục rèn”; trang Hôm nay có mục “Đang tạm dừng · n” với nút “Tiếp tục”.
  - `stPause` (nút Tạm dừng trong Sửa công thức) đổi theo nghĩa mới: không cất về Thư viện nữa; ẩn khi thẻ đã tạm dừng.
  - Esc: listener keydown của sheet14 (extensions.js) đóng menu ⋯ trước khi xử lý quay lại.
- Kiểm thử Chromium 390×844 và 1280×800 (Demo): menu 3 mục, tạm dừng → nhãn + nút Tiếp tục rèn + không còn trong r2TrainingNow, tiếp tục rèn, Esc/chạm ngoài đóng menu, Sửa công thức qua menu, Tạm dừng trong Sửa công thức, Hôm nay có mục tạm dừng → Tiếp tục, Cất thẻ, thẻ Thư viện không có ⋯, tạo thẻ riêng (chọn màu/biểu tượng/nhịp, đếm chữ), sửa thẻ riêng 320px, 5 bài học, habit-game.html, người học mới. Không lỗi JavaScript. Chưa thử WebKit/điện thoại thật.

## M.Claude.3.3.36 — 15/11/2026 — Sửa lỗi đợt 1 theo góp ý của người dùng (memo 30 mục)

Gốc M.Claude.3.3.35. Mã mới: SECTION batch36 cuối design-system.js và design-system.css; sửa nhỏ trong interaction.js (eveningLibrary, mi), extensions.js (thẻ game), core.js (lựa chọn bài học).

- (2) Ghi nhận thói quen: dải tay nắm cùng màu xanh đậm #173F79 với phần đầu.
- (5–6) Hành trình: khối “Gửi một lời nhắn” lên sát khối cây (bỏ khoảng trắng 104px → 16px); “Những chặng đã qua” cách đường kẻ 16px.
- (7) Nút check-in: “Hẹn bạn ngày mai” một dòng, nút ⋮ luôn cùng hàng.
- (8) Bài học – Thử ngay: các lựa chọn cách nhau 8px (`.ls-chips36`).
- (9, 12) Chọn thẻ để rèn (từ Hôm nay): chỉ hiện danh sách thói quen, ẩn tab Bài học và Trải nghiệm, không hiện thẻ game.
- (10) Tab “Công cụ” đổi tên “Trải nghiệm”, icon tay cầm chơi game (Lucide gamepad, cùng kiểu nét).
- (11) Sổ tay: đổi tab chỉ thay phần nội dung, không dựng lại cả màn hình.
- (13) Thanh điều hướng nền gần như đặc, ô đánh dấu tab rõ cả trên nền tối của Hành trình.
- (22) Nền gốc html #F9F9FF (thử khắc phục đường gạch khi cài app trên Android — cần người dùng kiểm tra trên máy thật).
- (23) Senpai kể mở từ thẻ: đóng xong quay lại đúng thẻ (dùng cơ chế rememberHabit33/restoreHabit33 có sẵn).
- (24) Nhật ký thẻ: chấm chú thích cùng màu ô ngày (Đã làm xanh, Một phần vàng, Chưa làm đỏ nhạt, Không gặp dịp xám).
- (25) Mở Teams: chép tin nhắn đồng bộ ngay lúc chạm (trước khi rời app).
- (26) Cài đặt › Hướng dẫn lần đầu › Mở lại: luôn hiện đủ 3 bước kể cả khi đã làm xong.
- (30) Không bôi đen/sao chép chữ trên trang (ô nhập vẫn chọn, chép được). Ô ghi chú rèn luyện hằng ngày (ghi nhận thẻ `data-in=note`, ghi chú check-in `ciNote29`, memo cuối ngày `ciMemo29`) chặn dán và kéo-thả chữ, báo “Ghi chú rèn luyện cần tự gõ, không dán được nhé.” Các ô khác (tên, lớp, mã học viên, lời nhắn…) dán bình thường.
- Mục 15 (thẻ công cụ dính): người dùng xác nhận không còn lỗi. Câu “Mỗi thẻ đạt cấp 2…” trong ảnh người dùng là bản cũ; bản hiện tại đã là “bậc 2”.

## M.Claude.3.3.35 — 15/11/2026 — Màu icon nhẹ nhàng hơn

Gốc M.Claude.3.3.34. Người dùng thấy màu icon 3.3.34 quá rực, gây mệt mắt; chọn mức nằm giữa PA1-A (nhạt) và PA1-A1 (rực hơn 25%), tức PA1-A thêm khoảng 12,5% độ rực. Đổi cả màu thẻ tự tạo.

- Chỉ đổi biến màu `--m3c` (nền khung) và `--m3o` (icon) của 10 nhóm màu trong SECTION m3-habit-icons (design-system.css). Nhóm 1 #E2E7F3/#445E85, 2 #DFEBE2/#44664F, 3 #DCEAE9/#3D6466, 4 #F1E4E7/#7D4F5E; màu thẻ tự tạo 5 #E8E3F1/#5C4F7C, 6 #F3E6DC/#7A593E, 7 #F2E3E0/#804D49, 8 #EEE5DC/#64523C, 9 #E3E7ED/#485868, 10 #F1E9D4/#695728.
- Ô chọn màu khi tạo thẻ riêng dùng cùng tông: vòng nền nhạt, chấm giữa màu icon (dấu ✓ trắng khi đã chọn), để vẫn phân biệt được 6 màu.

## M.Claude.3.3.34 — 15/11/2026 — Icon thói quen chuẩn Material 3; sửa hộp thoại “Đang duy trì”

Gốc M.Claude.3.3.33. Người dùng chốt PA1 (khung vuông bo góc, nền nhạt, icon đậm cùng tông), đổi cả icon thói quen tự tạo, sửa lỗi màn hình Đang duy trì.

- **Một bộ icon duy nhất** (SECTION m3-habit-icons cuối design-system.js và design-system.css): Material Symbols Rounded tô đặc (Google, Apache-2.0), nhúng thẳng dạng SVG nên không phụ thuộc phông, chạy được khi ngoại tuyến. 14 thói quen: chào hỏi = bàn tay vẫy, đúng giờ = đồng hồ báo thức, quan sát/ghi lại = ghi chú có bút, 5S = chổi, lắng nghe = tai, 5 phút = đồng hồ cát, cảm xúc = mặt cười, vận động = người chạy, ăn uống = dao dĩa, ngủ = trăng, chi tiêu = heo đất, việc khó = người leo núi, Hō-Ren-Sō = phiếu có dấu tích, giúp đỡ = tay trao tim. 12 icon thói quen tự tạo (giọt nước, sách, tim, tia sét, nốt nhạc, lá, bút, lửa, mặt trời, mặt cười, ngôi sao, trăng) và 4 icon nhóm cũng đổi.
- **Thay ở mọi chỗ:** `glyph()` trả SVG M3 (tô bằng currentColor); `flowIcon()`, `bandCardIcon()` dùng icon mới; `m3HabitIcon()` trả mã `m3h:id`, `mi()` được bọc để đổi mã này thành icon M3 (thay 10 chỗ trước đây dùng chung icon “style”). Khung `.hi` (tròn nổi), `.emb` (đồng xu có viền), `.m3hi` (icon nhỏ trước thẻ), `.today-habit-icon`, `.journal-icon31`, lưới chọn biểu tượng thẻ tự tạo → vuông bo 28%, nền nhạt theo màu nhóm (1 xanh dương, 2 xanh lá, 3 xanh ngọc, 4 hồng; màu thẻ tự tạo 5–10). core.js: hình thẻ dùng icon trắng (`style="color:#fff"`), `journal-icon31` dùng lớp màu nhóm thay nền đậm.
- **Sửa lỗi hộp thoại “Đang duy trì”** (và các hộp thoại kiểu cũ khác như Lửa): khi cuộn, nội dung lộ ra trên tay nắm và dưới tiêu đề trong suốt. Bỏ khoảng đệm trên của hộp thoại để tay nắm dính sát mép; tiêu đề dính có nền như hộp thoại (SECTION sheet-sticky-head trong design-system.css). Không áp cho hộp thoại f2.
- Icon trong mục Đang duy trì ở trang Hôm nay 40px; icon ở thẻ nhỏ Thư viện 36px.

## M.Claude.3.3.33 — 15/11/2026 — Game Tung thói quen tràn màn hình, giao diện M3 ; bỏ Pomodoro và Tập thở

Gốc M.Claude.3.3.32. Người dùng chốt PA1 (sân tràn màn hình, lướt xuống xem kết quả), giữ dải lướt xuống, rổ cao hơn một chút, hộp ném chữ to và tên gọn, game hài hòa giao diện Material 3.

- **Mở game trọn màn hình:** bỏ thanh tiêu đề “Tung thói quen”, câu giới thiệu và tay nắm kéo; khung chừa vùng tai thỏ/thanh home (`shinGameOpen14`, `shinGameClose14` trong SECTION routine-play, extensions.js; extensions.css dòng game14). Hộp thoại vẫn có tên “Tung thói quen” cho trình đọc màn hình.
- **Sân phủ kín** từ mép tới mép, cao bằng màn hình trừ dải 48px “N thói quen vào rổ · Lướt xuống ↓” (dùng lại nút `#game14-results-jump`, bấm để nhảy xuống). Nút nổi cũ “N gợi ý · Xem ↓” được thay bằng dải này. Máy tính (≥480px): sân bo góc 28px.
- **Điều khiển nổi trên sân:** ✕ thoát (trái trên), điểm 3/14 và 🔊 (phải trên); Xếp lại, Tung lên ở hàng thứ hai.
- **Lời nhắn 2 giây trên sân** (`showToast`, `#hud-toast`): khi chạm, kéo, vào rổ; lúc mở hiện câu hướng dẫn 3 giây. Chữ lấy từ thanh hướng dẫn cũ; nằm dưới lưới rổ.
- **Bên dưới sân:** “14 thói quen – Tung thử nhé!”, thanh hướng dẫn, danh sách đã vào rổ.
- **Rổ trong 1/3 phía trên** (người dùng muốn khó hơn cho vui): `HOOP_TOP = 0.22` chiều cao sân, không thấp hơn mức chừa 2 hàng nút (habit-game.js, initGameWorld). Sân thay chiều cao >40px thì dựng lại.
- **Hộp ném theo phong cách hộp cũ (~90%)** (`GAME33_BOX` trong habit-game.js, lớp `.g33-*` trong design-game.css): giữ màu nền/viền cũ, nhãn nhỏ (SMILE FIRST, ON TIME…), ô đậm (+1, 5S, 05:00, 7–8h, ₫, 3X, OK) và họa tiết (chấm, dòng kẻ sổ, sọc chéo, nền sao, đồng hồ, bậc thang, sóng, bánh xe màu). Nhiều hình và cỡ: tròn (Tận dụng 5 phút, Cảm xúc), vuông (Hỏi và ghi lại, 5S), chữ nhật to (Chào hỏi, Chi tiêu, Báo cáo), chữ nhật hẹp đứng (Đúng giờ, Dám thử việc khó), viên dẹt (Vận động, Giúp một việc, Ngủ đủ giấc). Tên gọn 13px đậm, xuống 2 dòng (`GAME33_LABELS`, chỉ dùng trong game).
- **Xếp hộp lúc bắt đầu:** xếp từng hàng từ đáy lên, không chồng nhau; hộp không nhỏ hơn 0.82 lần; màn hình thấp thì giảm cỡ dần để chồng hộp không chạm lưới rổ (`boxScaleNow`).
- **Màu và nút theo M3 của app** (design-game.css cuối tệp): mặt sân surface-container-low, rổ màu chủ đạo #2265C5, nút tonal/filled, bỏ chữ “GOAL HOOP”, thẻ kết quả và khung danh sách bo 16/24px. Hộp ném giữ màu cũ.
- **Bỏ Pomodoro và Tập thở** (người dùng chốt: học viên không để điện thoại mở suốt khi làm việc): tab Công cụ chỉ còn game Tung thói quen; bỏ nút “Tập thở cùng Shin” trong Cách làm Cảm xúc; đồng hồ Pomodoro cũ không chạy nền. Mã cũ giữ lại nhưng không còn lối vào (interaction.js eveningLibrary; extensions.js SECTION routine-pomodoro, breath18). Kiểm tra dữ liệu `evening.pomodoro` giữ nguyên để nhập/xuất dữ liệu cũ.
- **Thẻ “khu vực game” mới ở Thư viện › Công cụ** (`shinGameCard33`, `shinGameScene33` trong SECTION routine-play; SECTION play33 cuối styles/extensions.css): sân mini nền chấm có rổ, đường bay nét đứt, hộp ném giống trong game (hộp “Chào hỏi” khẽ bay, tắt khi giảm chuyển động), nhãn GAME (hoặc “x / 14 đã vào rổ”), nút “Chơi ngay”; bấm cả thẻ để mở game. Bỏ câu “Chọn một công cụ để bắt đầu dễ hơn”. Chữ mới chờ duyệt: “GAME”, “Chơi ngay”, “x / 14 đã vào rổ”.
- Chơi game vẫn không cộng ngày rèn, không cộng Lửa; không đổi khóa lưu trữ.

## M.Claude.3.3.32 — 15/11/2026 — Luật rèn luyện v2, đợt 3: chữ

Gốc M.Claude.3.3.31. Người dùng chốt thống nhất “Cấp” → “Bậc”.

- **Bài Nền tảng 1, 4, 5 — “Trong app này”** (LESSONS trong core.js) viết lại theo luật v2: tự lên bậc + Shin hỏi chỉnh công thức (bài 1); Lửa +1/+2, nghỉ 1 ngày trong 7 ngày, −1 khi lỡ thêm, ghi bù không cộng Lửa, mốc 3·6·9, mạng nhện 14 ngày (bài 4); đủ phiếu tự lên bậc, trình Thẻ tuần khi thầy cô yêu cầu (bài 5). Nút cuối bài 4: “Xem Lửa”. Phản hồi bài 4 “chuỗi” → “nhịp”.
- **Hình bài học** (LV trong how-visual.js): chú thích và nhãn trong hình bài 1, 4 (Hiểu + Trong app), 5 khớp chữ mới; hình Trong app bài 4 có Lửa, ô nghỉ, “−1 Lửa”, 3·6·9, 14 ngày.
- **Gợi ý ghi chú hướng về ích lợi:** khi Đã làm / Một phần, câu hỏi thành “Hôm nay thói quen này giúp bạn điều gì?”; 3 gợi ý ích lợi riêng cho từng thói quen (`BEN32` cuối SECTION curriculum14 trong extensions.js; thẻ tự tạo dùng `R2_BEN_DEFAULT`), gợi ý “làm gì, ở đâu” cũ xếp sau (Xem thêm). Chưa làm / Không gặp dịp giữ như cũ. Bọc `noteHints34` trong SECTION rules-v2-text.
- **“Cấp” → “Bậc”** trên thẻ, thư viện, Cách làm (Ba bậc), Hành trình, cây, tem/thư, nhật ký in, màn hình treo cây (“đã lên bậc Làm quen”). Giữ “cấp trên”, “nâng cấp bản thân”.
- Ghi chú mẫu công thức giảm dần: bỏ “Lên cấp vẫn cần bạn xem lại và xác nhận”.
- **File duyệt chữ** `Shin-routine-3.3.32_Duyet-chu-luat-v2.xlsx` (57 dòng chữ mới/đã sửa của đợt 1–3; trang Hướng dẫn, Duyệt chữ, Bổ sung, Tổng hợp).
- APP_VER và cache: M.Claude.3.3.32.

## M.Claude.3.3.31 — 15/11/2026 — Luật rèn luyện v2, đợt 2: giao diện

Gốc M.Claude.3.3.30. Người dùng chốt: ngày chỉ có ghi bù tính như ngày chưa ghi đối với Lửa (giữ như 3.3.30); thẻ Thành nếp giữ nút "Sang duy trì" và thêm câu hỏi có muốn chuyển sang Duy trì để rèn thói quen mới.

- **Trang Hôm nay — "Đang duy trì"** (`r2KeepToday`, bọc `vToday`): tối đa 3 thẻ duy trì dưới thẻ đang rèn (thẻ chưa ghi hôm nay và lâu chưa làm lên trước), dòng "Làm gần nhất: x ngày trước", nhãn "Shin nhắc" (≥7 ngày) / "Mạng nhện" (≥14 ngày); chạm là mở ghi nhận; "Xem tất cả · n" mở bảng Đang duy trì có sẵn (`openKeeps`).
- **Sau khi vuốt** thẻ ở Hôm nay: mở màn hình ghi nhận đủ 3 nút (như chạm Đóng dấu), kết quả vuốt được chọn sẵn (interaction.js; `openQuick16` cũng vậy).
- **Shin hỏi khi mở app** (`r2Ask`, gọi từ boot.js và khi quay lại app): tối đa 1 lần/ngày (`S.r2.ask`); không hỏi nếu mọi thẻ đã ghi hôm nay, khi đang có thông báo lên bậc, khi mở từ lời nhắc check-in, khi chưa có tên. Chọn thẻ: thẻ duy trì ≥7 ngày chưa làm → thẻ đang rèn chưa ghi, ưu tiên thẻ sắp lên bậc (nhắc "còn n ngày/lần" khi ≤3). "Rồi, ghi luôn" mở ghi nhận của thẻ đó; "Chưa" về Hôm nay, Shin để lại 1 mẹo ngắn (bài 1, 4); có nút đóng.
- **Khi lên bậc** (`offerTier`): Shin hỏi "có muốn chỉnh công thức rèn cho hợp với mình hơn không?" — Chỉnh (mở sửa công thức) / Giữ nguyên. Bậc 2: sau màn hình treo cây ("Tiếp tục"); bậc 3: sau con dấu.
- **Khi Thành nếp** (`masterShow`): Shin hỏi có muốn chuyển sang Duy trì để có chỗ rèn thói quen mới — "Sang duy trì" / "Để sau". Nút "Sang duy trì" trên thẻ giữ nguyên.
- **Thẻ tuần:** dòng "Lửa tuần: +x · y/7 ngày có ghi" và 7 ô ngày (+2, +1, Nghỉ, Lỡ, Hôm nay); có ngày Lỡ thì nhắc "Hãy sẵn sàng kể lý do khi trình thẻ". Ảnh Thẻ tuần thêm dòng "Lửa tuần … · Nghỉ: … · Lỡ: …".
- **Sửa lỗi có từ trước:** Demo mở lại (tải lại trang) biến 10 thẻ duy trì thành đang rèn vì `buildDemo` để `v:3` → `migrate` đổi `keep` thành `active`. Nay `buildDemo` đặt `v:5`.
- Tệp sửa: scripts/rules-v2.js (SECTION rules-v2-ui), core.js (masterShow, offerTier, wkImage), interaction.js, extensions.js, boot.js, design-system.css (SECTION rules-v2-ui), index.html, habit-game.html, sw.js. APP_VER và cache: M.Claude.3.3.31.

## M.Claude.3.3.30 — 15/11/2026 — Luật rèn luyện v2, đợt 1: logic lõi

Theo mục 10 tài liệu "Shin routine — Logic rèn luyện" (đã chốt 15/11/2026). Chỉ đổi logic lõi; giao diện để đợt 2, chữ bài học để đợt 3.

- **Mới `scripts/rules-v2.js`** (tải sau how-visual.js, trước boot.js): một nơi tính Lửa, ngày nghỉ, số ngày/lần của thẻ, bậc, thẻ duy trì; bọc save/writeRecord/undoRecord29/load/applyRestore32/closeOv.
  - Lửa: ngày có ghi đúng ngày ≥1 thẻ +1 (kể cả "Chưa làm", kể cả đóng dấu lẻ); trọn mọi thẻ đang rèn +2 (khi gặp dịp: Đã làm hoặc Không gặp dịp); thẻ duy trì không tính vào trọn. Không reset, thấp nhất 0. Ngày ghi bù không cộng Lửa.
  - Ngày nghỉ: 1 ngày trong 7 ngày (không trừ Lửa, thẻ hằng ngày vẫn được tính ngày). Lỡ thêm: −1 Lửa/ngày, thẻ không tính ngày đó.
  - Bậc: hằng ngày 7/14/21 ngày (Đã làm hoặc Một phần + ngày nghỉ), khi gặp dịp 3/6/9 lần; tự lên bậc, không tự hạ; hoàn tác ghi nhận vừa làm lên bậc thì trả lại bậc cũ.
  - Thẻ duy trì: 7 ngày chưa làm → "Shin nhắc"; 14 ngày → mạng nhện (cả thẻ khi gặp dịp). Tính từ lần làm gần nhất hoặc từ ngày Thành nếp.
  - Ghi "thẻ đang rèn" theo ngày (`S.r2act`) để biết ngày nghỉ được cộng cho thẻ nào; ngày trước bản này thì suy từ ngày bắt đầu, Thành nếp và lần ghi cuối.
  - Lần mở đầu ở v2 (`S.r2`): tính lại bậc theo mốc mới, Lửa tính lại từ lịch sử; Shin báo thẻ nào đã lên bậc (Demo: lặng lẽ).
  - Mừng lên bậc dùng lại màn hình có sẵn: bậc 2 → treo lên cây (showTreeAward), bậc 3 → con dấu + thông báo, Thành nếp → masterShow. Chờ popup đang mở đóng rồi mới hiện.
- **Bỏ:** mục tiêu tuần (bước chọn 1–7 ngày, "Rèn thêm nếu muốn", "vượt mục tiêu", mục tiêu mềm), thử thách tuần (lời mời, panel, lưu cảm nhận; trải nghiệm cũ vẫn hiện trong nhật ký), XP (không còn cộng/trừ; trường `xp` cũ giữ nguyên trong dữ liệu), chuỗi riêng từng thẻ và mốc "x ngày liên tiếp", xác nhận bạn cùng tiến và mã thầy cô khi lên cấp, con dấu bạn/thầy cô và mã trên Thẻ tuần, chế độ giáo viên (PIN) trong Cài đặt, "Nâng việc"/"Thử thách cấp" (offerTier chỉ đóng popup; đợt 2 thay bằng câu hỏi chỉnh công thức).
- **Chữ đổi theo logic (tối thiểu):** nhãn số trên thanh trên và Sổ tay "Lửa" thay "Chuỗi/ngày"; popup Lửa (cách tính v2, lịch tháng theo ngày có ghi); "Đang duy trì" (ghi chú mốc 7/14, "Làm gần nhất"); nhãn "Đang phai" → "Shin nhắc"; Thẻ tuần "Trình thẻ này trước lớp khi thầy cô yêu cầu."; Sổ tay "Báo cáo cuối học phần" → "Báo cáo cho thầy cô"; nhật ký thẻ: "Tuần này: x ngày đã làm", Shin nhắn bậc hiện tại x/mốc; nhật ký in A4: "Lên bậc … ngày …".
- Tệp sửa: scripts/core.js, habits.js, interaction.js, extensions.js, interface.js, design-system.js, boot.js, index.html, habit-game.html, sw.js; thêm scripts/rules-v2.js. APP_VER và cache: M.Claude.3.3.30. Giữ 3 khóa lưu trữ.

## M.Claude.3.3.29 — 15/11/2026 — Hình mặt sau thẻ (BẢN FINAL)

Người dùng xem 14 hình mặt sau đề xuất (cùng phong cách: nền trong suốt, nét kem/vàng/xanh bạc hà, ẩn dụ câu thành ngữ, không người) và chọn **đổi 8 hình: 2, 4, 5, 6, 7, 8, 12, 13**; giữ 6 hình cũ.

- `design-system.js` (`SHIN_BACK_ART`, `SHIN_BACK_ART_VIEWBOX`): thay hình của som (mặt trời mọc + ba đồng tiền 三文), 5s (sếu cất cánh, mặt hồ trong), xinloi (bát hàn vàng kintsugi), 5phut (chấm nhỏ gom thành núi), camxuc (sóng lặng dần, trăng), vandong (giọt nước khoét đá), viecko (chim non rời tổ), horenso (ba bậc đá qua suối, cầu đá). Các hình mới viewBox 480×200, không có nền riêng.
- Giữ hình cũ: chao, memo, anuong, ngu, chitieu, giup. Hình giup được kéo giãn ngang nhẹ để đồi không còn mép đứng hai bên.
- `design-system.css`: dải hình dùng nền phẳng #173F79 đúng màu thẻ (bỏ gradient); mép dưới hình mờ dần sang vùng chữ (mask-image, có -webkit-).
- APP_VER và cache: M.Claude.3.3.29. Không đổi chữ, câu Nhật, dữ liệu.

Bản này là bản final của phiên. Việc còn lại: thử trên Safari/iPhone và Android thật; tài liệu "Logic rèn luyện" (Claude Docs) chờ người dùng góp ý để điều chỉnh logic ở phiên sau.

## M.Claude.3.3.28 — 14/11/2026 — Bản final của đợt "Cách làm bằng hình"

Người dùng duyệt 2 câu mới ở Bài 3, Bài 5 và đồng ý sửa 4 chỗ chữ bài học chưa khớp app.

- `scripts/core.js` (LESSONS):
  - Bài 1: "Ô “Tôi sẽ…”" → "Dòng “Mình sẽ…”" (ở mục Trong app và Luyện ngay), khớp nhãn MÌNH SẼ trên thẻ.
  - Bài 3: "Thẻ 5S một phút" → "Thẻ 5S - Gọn gàng và ngăn nắp"; "Thẻ Ngủ sớm" → "Thẻ Ngủ đủ giấc"; bỏ câu về "Thẻ Giảm dần" (thẻ đã bỏ khỏi bộ 14).
  - Bài 4: "(như Nhận góp ý)" → "(như Lắng nghe và sửa sai)" — thẻ này đúng là loại "khi gặp dịp" trong bộ 14 (cùng Dám thử việc khó, Báo cáo và xác nhận, Giúp đỡ một việc).
- APP_VER và cache: M.Claude.3.3.28.

**Tổng kết đợt M.Claude.3.3.22 → 3.3.28:** 14/14 thói quen có hình trong "Cách làm" (tranh đôi Ở TRƯỜNG/Ở NHẬT hoặc BÂY GIỜ/SANG NHẬT, 3 khung bước, cặp Nên/Tránh, Shin mách nhỏ; giữ 9 hình cũ); 3 bài Tìm điểm (Ngủ, Ăn uống, 5S); 2 hình động (squat, vòng thở); 5 bài Nền tảng rèn luyện có hình ở thẻ Hiểu, Senpai kể, Trong app; bỏ mọi trích dẫn lời Thầy. Dữ liệu, khóa lưu, cách tính tiến độ/XP không đổi. Việc còn lại: thử trên Safari/iPhone và điện thoại Android thật.

## M.Claude.3.3.27 — 14/11/2026 — Bỏ trích dẫn Thầy Lê Long Sơn

Yêu cầu: xóa hết trích dẫn của Thầy trong 5 bài học và "Cách làm" của 14 thói quen; câu nào hay thì chuyển thành chữ của khóa học.

- `scripts/core.js`: xóa 5 trường `quote` (chao, memo và 3 thẻ cũ đã bỏ khỏi bộ 14 thẻ: loihua và hai thẻ cũ khác).
- Bài 3: khung trích dẫn đổi thành câu của khóa học "Thói lười có thể lây sang nhau." (nối với "Siêng năng cũng lây…").
- Bài 5: khung trích dẫn đổi thành "Khi đã thật sự muốn, mình tự học, tự làm mà không cần ai nhắc." (dẫn vào thang Bị → Đam mê).
- Kiểm tra: không còn chữ "Lê Long Sơn" trong mã; mở mọi thẻ của 14 thói quen và 5 bài không còn khung trích dẫn.
- **Quy ước:** app không trích dẫn lời Thầy; không thêm lại.
- APP_VER và cache: M.Claude.3.3.27.

## M.Claude.3.3.26 — 14/11/2026 — 5 bài "Nền tảng rèn luyện" bằng hình (chờ duyệt)

Yêu cầu: áp dụng hướng "Cách làm bằng hình" cho 5 bài học nền tảng (hiểu cách dùng app và phương pháp rèn luyện).

- `scripts/how-visual.js`, mục `LV` (b1–b5), không sửa chữ của bài:
  - **Hiểu**: hình ý chính chèn sau câu in đậm đầu bài — b1 biểu đồ 14 ngày "1 tiếng/tối vs 10 phút/tối"; b2 dòng thời gian việc quen trong ngày + "đánh răng xong → mở sổ"; b3 GẦN/XA; b4 chuỗi ngày lỡ 1 ngày vs lỡ 2 ngày liền; b5 hộp phiếu + cột phiếu tuần này/tuần sau, và thang 5 bậc Bị → Đam mê vẽ thành bậc thang (thay khối chữ `.ladder`, giữ nguyên 5 từ).
  - **Senpai kể**: cảnh minh họa câu chuyện ở đầu thẻ (bọc `lsDialog`).
  - **Trong app**: mô phỏng thẻ thói quen đúng nhãn thật (MÌNH SẼ · KHI · Trở thành…), khoanh vàng chỗ bài nhắc tới; b4 mô phỏng chuỗi tuần, ghi bù 3 ngày, thẻ "khi gặp dịp", "mạng nhện" (bọc `lsApp`).
- Thẻ "Thử" giữ nguyên tương tác cũ.
- APP_VER và cache: M.Claude.3.3.26. Dữ liệu không đổi.
- Phát hiện chữ cũ chưa khớp app hiện tại (chưa sửa, chờ người dùng duyệt): b1 "Ô “Tôi sẽ…”" (thẻ ghi MÌNH SẼ); b3 "Thẻ 5S một phút", "Thẻ Ngủ sớm", "Thẻ Giảm dần" (đã bỏ khỏi bộ 14 thẻ); b4 "(như Nhận góp ý)" (nay là Lắng nghe và sửa sai).

## M.Claude.3.3.25 — 14/11/2026 — "Cách làm" bằng hình, đợt 4 (đủ 14 thói quen, chờ duyệt)

Người dùng duyệt đợt 3, góp ý: bàn tay vẽ hơi thô (Đúng giờ hình 2; Chào hỏi tranh đôi và hình 1–3; 5S hình 3).

- **Bàn tay mới cho mọi hình**: hàm `hand()` vẽ lòng bàn tay bo tròn xoay theo cẳng tay, có ngón cái, viền mảnh hơn; `arm()` dùng chung. Tay mọc từ vai (thấp hơn đỉnh thân 4px) thay vì đỉnh thân. Áp dụng tự động cho cả 14 thói quen.
  - Đúng giờ bước 2: vẽ lại dáng ngồi nhìn thẳng, hai tay vươn lên.
  - Chào hỏi bước 1, 3: tay vẫy chào; bước 2 và tranh đôi: tay buông tự nhiên.
- Đợt 4: **memo, xinloi, viecko** (giữ hình cũ memo, sorry). Dám thử việc khó có hình trọng tâm "3 vùng: An toàn / Vừa sức / Quá sức".
- Đủ 14/14 thói quen có tranh đôi, 3 khung bước, cặp Nên/Tránh, Shin mách nhỏ; 3 bài Tìm điểm (Ngủ, Ăn uống, 5S); 2 hình động (squat, vòng thở).
- APP_VER và cache: M.Claude.3.3.25. Dữ liệu không đổi.

## M.Claude.3.3.24 — 14/11/2026 — "Cách làm" bằng hình, đợt 3 (chờ người dùng duyệt)

Người dùng duyệt đợt 2, nhắc: lời thoại (bóng chữ) không được đè lên nhân vật; đồng ý thay bài dọn bàn 30 giây của 5S.

- Đợt 3 trong `scripts/how-visual.js`: **5s, som, chao**.
  - **Giữ hình cũ**: `whyHTML`/`stepsHTML` giờ tự chèn `x.ill[0]` (Vì sao) và `x.ill[1]` (Các bước) bằng `illSVG` gốc — Chào hỏi giữ "nói trước, cúi sau" và "3 mức cúi"; 5S giữ "bàn trước/sau" và "xếp giày"; Đúng giờ giữ "thước 7:45–8:00".
  - 5S: Thực tập `tidy` (dọn bàn 30 giây) thay bằng `spot` phòng ký túc xá buổi sáng (giày ở cửa, chăn chưa gấp, rác đầy; 3 chỗ ổn).
  - Hàm mới `bowSide()` (dáng cúi chào nhìn ngang), đồ vật: giày, thùng rác, kệ có nhãn, cửa, bảng treo dụng cụ.
- Rà lại lời thoại đợt 1–2: dời bóng chữ ở Báo cáo (bước 1, bước 3) và Giúp đỡ (bước 3, cặp Nên/Tránh) để không chạm đầu nhân vật; dời Shin ở Giúp đỡ bước 2.
- APP_VER và cache: M.Claude.3.3.24. Dữ liệu không đổi; bài 5S vẫn ghi S.prDone như cũ.

Còn lại (đợt 4): memo, xinloi, viecko.

## M.Claude.3.3.23 — 14/11/2026 — "Cách làm" bằng hình, đợt 2 (chờ người dùng duyệt)

Người dùng duyệt đợt 1 ("rất ổn, tiếp tục hướng như thế") và chốt thêm: cân bằng nhân vật nam/nữ; nhãn tranh đôi mặc định **Ở TRƯỜNG / Ở NHẬT**, dùng **BÂY GIỜ / SANG NHẬT** khi bối cảnh là đời sống ngoài trường; thêm bài "Tìm điểm chưa ổn" cho Ăn uống (và 5S ở đợt sau).

- Đợt 2 trong `scripts/how-visual.js`: **anuong, camxuc, giup, 5phut** — tranh đôi, 3 khung bước, cặp Nên/Tránh, Shin mách nhỏ.
  - Ăn uống: Thực tập đổi sang `spot` (bàn ăn trưa: 3 món nên thay, 3 chỗ ổn), thay bài chọn chữ cũ.
  - Cảm xúc: bước 2 có hình động vòng thở 8 giây (dừng khi giảm chuyển động).
- `duo()` nhận tham số nhãn; Báo cáo, Cảm xúc, Giúp đỡ, 05 phút dùng Ở TRƯỜNG/Ở NHẬT; Vận động, Ngủ, Chi tiêu, Ăn uống dùng BÂY GIỜ/SANG NHẬT.
- Cân bằng nam/nữ ở đợt 1: Vận động (tranh đôi, cặp hình), Ngủ (tranh đôi, cặp hình), Chi tiêu (tranh đôi), Báo cáo (bước 3, người làm ở Nhật) dùng nhân vật nữ.
- `head()` thêm tùy chọn `blush`, `mad` (mặt đỏ, nhíu mày) cho Cảm xúc.
- APP_VER và cache: M.Claude.3.3.23.
- Dữ liệu: không đổi khóa lưu, schema, cách tính tiến độ/XP. Bài Thực tập Ăn uống đổi dạng nhưng vẫn ghi S.prDone như cũ.

Còn lại (đợt 3–4): chao, som, 5s, memo, xinloi, viecko — giữ 9 hình cũ, bổ sung khung bước, tranh đôi, cặp Nên/Tránh; bài Tìm điểm cho 5S (phòng KTX).

## M.Claude.3.3.22 — 14/11/2026 — "Cách làm" bằng hình, đợt 1 (chờ người dùng duyệt)

Yêu cầu: mọi thói quen có ít nhất 2–3 hình trong "Cách làm", đồng bộ nét với hình gốc (chào hỏi, memo, 5S). Người dùng chốt PA2 "Bước bằng hình", nhân vật kết hợp (người làm động tác, Shin nhắc mẹo), duyệt cả 4 ý A–D, tên bản M.Claude.3.3.22. Lý do bỏ bản thử M3.3.21: vẽ chưa đẹp, không đồng bộ với hình sẵn có — bản này vẽ lại từ đầu theo đúng nét `person()`/`illSVG()` trong core.js.

- **Mới `scripts/how-visual.js`** (nạp sau design-system.js, trước boot.js): bộ nét vẽ chung (dáng người nhiều tư thế, đồ vật), bọc `openHow` để thay 3 thẻ của 4 thói quen đợt 1:
  - Vì sao: tranh đôi "BÂY GIỜ ↔ SANG NHẬT" (ý A), hai ô chữ giữ nguyên nội dung, xếp lại thứ tự Với bạn → Ở Nhật cho khớp tranh.
  - Các bước: mỗi bước một khung tranh phía trên chữ; Vận động có hình động squat 3 dáng (ý C, dừng khi bật giảm chuyển động); hộp "Shin mách nhỏ" (ý D) cuối thẻ; Shin xuất hiện trong một vài khung.
  - Ghi nhớ: cặp hình Nên ✓ / Tránh ✗ trên danh sách chữ.
  - Thực tập kiểu mới `type:'spot'` "Tìm điểm chưa ổn" (ý B), dùng cho **Ngủ** (thay bài chọn chữ cũ): phòng lúc 22:30, 3 chỗ chưa ổn + 2 chỗ ổn (chạm vào chỉ hiện ghi chú, không trừ điểm). Bọc `prDraw`/`prAct`; hoàn thành gọi `prWin` như cũ.
- Đợt 1: **vandong, ngu, chitieu, horenso** (4 thói quen chưa có hình). 10 thói quen còn lại hiển thị như M3.3.20.
- `design-system.css`: thêm SECTION how-visual cuối tệp (bỏ giới hạn cao 180px cho hình mới, khung bước, hộp Shin, hình động, Tìm điểm).
- `scripts/core.js`: chỉ đổi APP_VER thành M.Claude.3.3.22. `index.html`, `habit-game.html`, `sw.js`: cache M.Claude.3.3.22, thêm how-visual.js vào CORE offline.
- Chữ mới (cần người dùng duyệt): nhãn trong hình, chú thích, 4 câu "Shin mách nhỏ", đề và phản hồi bài Tìm điểm. Số tiền/giờ trong hình là ví dụ, có nhãn "Ví dụ".
- Dữ liệu: không đổi khóa lưu, schema, cách tính tiến độ/XP.

Kiểm tra thực sự đã chạy: xem VALIDATION.json. Chưa thử WebKit/Safari và điện thoại thật.

**Việc tiếp theo:** người dùng duyệt đợt 1 → sửa theo góp ý → đợt 2–4 cho 10 thói quen còn lại (giữ 9 hình cũ, bổ sung khung bước, tranh đôi, cặp Nên/Tránh; cân nhắc thêm bài Tìm điểm cho 5S phòng KTX, Ăn uống khay cơm).

## M3.3.20-5S.2 — 14/11/2026 — bản chốt sau duyệt hình

Người dùng duyệt đủ 7 hình vẽ lại, chốt 6A và 7B, yêu cầu áp dụng trên M3.3.20–5S và đóng gói kèm tiến độ để chuyển hội thoại/công cụ AI. Bản thử “Cách làm bằng hình” M3.3.21-5S-preview được tạm bỏ, không nhập vào bản này.

- `design-system.js`: thay đúng 7 SVG trong SHIN_BACK_ART: som, 5s, chitieu, vandong, viecko, horenso (6A — cầu đá trong sương sớm), giup (7B — hoa và cánh bướm). Giữ 7 SVG còn lại; thêm bảng viewBox để giữ tỷ lệ hình mới và tiền tố ID gradient theo thói quen. SVG nằm hoàn toàn nội tuyến, không cần tải ảnh hay thư viện mới.
- `index.html`, `habit-game.html`, `sw.js`: đồng bộ cache M3.3.20-5S.2; sửa chú thích phiên bản đầu sw.js. APP_VER vẫn M3.3.20.
- `HANDOFF.md` mới: bản gốc chính thức, tiến độ, các phương án đã chốt/tạm dừng, yêu cầu cho AI tiếp theo, nơi sửa, bảo toàn dữ liệu, cách đóng gói và câu nhắn gửi kèm ZIP.
- `README.md`, `AGENTS.md`, `CLAUDE.md`, `AI_CONTEXT.md`, `source-map.json`, `VALIDATION.json`: cập nhật mốc cuối, nguồn hình và kiểm tra thực sự của bản 5S.2.
- Không đổi các tệp scripts/*.js, styles/*.css, design-system.css, boot.js, manifest, game hay các tài nguyên khác. Không đổi câu thành ngữ, phiên âm, nghĩa, cách tính tiến độ, khóa dữ liệu, schema, mặt trước hoặc xử lý lật thẻ.
- Gói hoàn chỉnh 52 tệp, index.html ở gốc ZIP; không kèm bản thử, công cụ xem mẫu, node_modules hay dữ liệu học viên.

Kết quả kiểm tra bản này nằm trong VALIDATION.json. Bản gốc M3.3.20–5S được giữ riêng. Không có hạng mục đã duyệt còn chờ thực hiện trong phạm vi phiên; bước tiếp theo là dùng bản chốt này cho yêu cầu mới và kiểm tra thiết bị thật sau triển khai nếu cần.

## M3.3.20-5S.1 — 14/11/2026

Yêu cầu đã duyệt: áp dụng mặt sau xanh đậm và minh họa trên 1/4 phía trên cho cả 14 thẻ; sửa lật thẻ trên bản 5S, giữ gói dưới 100 tệp.

- design-system.js/.css: 14 hình vector nội tuyến, màu #173F79, chữ xanh trắng, giữ nguyên câu Nhật/phiên âm/nghĩa/nội dung.
- scripts/habits.js: dựng hai mặt trong cùng khung thường trú.
- scripts/interaction.js: xoay một turner 360 ms; không dựng lại popup ở cuối; chặn lật chồng và hỗ trợ giảm chuyển động. Bỏ các hiệu ứng ghost/press-tilt cũ không còn dùng.
- scripts/extensions.js: hai mặt cùng kích thước, nhớ cuộn theo mặt; mặt sau cuộn vùng chữ riêng.
- core/index/habit-game/sw: phiên bản chức năng M3.3.20, cache M3.3.20-5S.1. Khóa dữ liệu và cách tính ngày/cấp/XP giữ nguyên.
- Gói vẫn 51 tệp, gồm đầy đủ hướng dẫn bàn giao.

Kiểm tra thực tế đã chạy và giới hạn nằm trong VALIDATION.json. Không đồng nhất kiểm tra Chrome/WebKit mô phỏng với thử trên điện thoại thật.

## M3.3.19-5S.1 — 14/11/2026

Mục đích: dọn mã có kiểm chứng và giảm số tệp để dễ tải GitHub, dễ chuyển công cụ AI. Giữ chức năng M3.3.19.

- Giảm gói 79 tệp còn **51 tệp**, đã tính cả hướng dẫn và công cụ kiểm tra.
- Tổ chức các tệp JS/CSS thành scripts/ và styles/, có ranh giới SECTION và source-map.json. Đây là nguồn chỉnh sửa trực tiếp, không có bản nguồn trùng khác hay bước biên dịch.
- Bỏ ba hàm giao diện nền drawHow, drawLesson, drawNote29 đã được thay hoàn toàn; bỏ một lệnh APP_VER trùng; bỏ 16 quy tắc CSS cho các thanh tiến độ không còn phát sinh. Danh sách chi tiết trong source-map.json.
- Giữ thứ tự classic scripts và cascade. Cập nhật đường dẫn font CSS, danh sách offline và mã cache 5S.1. Không đổi khóa dữ liệu hay quy tắc tiến độ/XP.
- Thêm AGENTS.md, CLAUDE.md, AI_CONTEXT.md, VALIDATION.json và tools/verify.mjs để bàn giao.

Kiểm chứng: 72/72 kiểm tra hồi quy; 170/170 lượt đối chiếu giao diện/hàm trên Chrome và WebKit; 372 trạng thái bố cục Chrome và 171 trạng thái bổ sung WebKit; 6 kiểm tra offline tại gốc và 6 tại đường dẫn con như GitHub Pages. Các bộ kiểm tra này không ghi nhận lỗi JavaScript. Chưa thử thiết bị điện thoại thật. Chi tiết phạm vi trong VALIDATION.json.

Không tuyên bố đã loại hết mọi đoạn mã cũ: các hàm bọc và CSS nền còn phụ thuộc nhau được giữ lại. Bước tiếp theo khi có nhu cầu là làm phẳng từng luồng riêng, đối chiếu trước/sau cho luồng đó; không xóa hàng loạt theo tên hoặc lịch sử phiên bản.

Sau lần chỉnh sửa tiếp theo, thêm mục mới ghi rõ yêu cầu, tệp đã đổi, dữ liệu bị ảnh hưởng hay không, kiểm tra thực sự đã chạy và việc còn lại. Không sửa lịch sử này thành kết quả chưa được kiểm chứng.
