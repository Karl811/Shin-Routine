# ĐỌC TRƯỚC — bàn giao Shin routine (cập nhật M.Claude.3.3.38 — 15/11/2026)

## 0. Bản hiện tại: M.Claude.3.3.38 — Đợt 3 (Thư viện, Sổ tay › Tiến bộ, Thẻ thành tựu, chữ công thức)

- Gốc: M.Claude.3.3.37. APP_VER và cache: **M.Claude.3.3.38**; 54 tệp. Toàn bộ mã mới ở SECTION batch38 cuối design-system.js / design-system.css (bọc `eveningLibrary`, `nbSum`, `openTreeCard30`; không sửa tệp khác ngoài số phiên bản).
- Câu công thức khi thiết lập thói quen (`.sheet.wizard16 .sentence`) 16 → 18px; chỉ trong màn hình thiết lập, nơi khác không đổi.
- Thư viện › Thói quen: ô tìm (bỏ dấu, từ khóa đời thường `KW38`, khớp đúng từ trước rồi mới nới), chip lọc có số, thẻ nổi bật dùng hình mặt sau (GỢI Ý HÔM NAY / THẺ ĐANG CẤT / THẺ CỦA NGÀY), danh sách M3 theo nhóm, nhóm Thẻ tự tạo + dòng “Tự tạo thẻ riêng”. Màn hình “Chọn thẻ để rèn” dùng cùng danh sách + ô tìm (không có thẻ nổi bật).
- Thư viện › Bài học: thẻ nổi bật “đường 5 bậc đá” (bài tiếp theo / ôn lại), danh sách 5 bài, Cách làm 14 thói quen dạng ô 2 cột có ô tìm riêng. Tab Trải nghiệm giữ nguyên.
- Sổ tay › Tiến bộ: “Shin nhìn lại tuần này” 7 phần (`nbReview38`): lời Shin, Giữ nhịp tốt nhất, Ghi chú chăm nhất, Cần để ý (lỡ ≥2 ngày, Shin nhắc, mạng nhện), Khởi đầu tốt nhưng chững lại (chỉ hiện khi có), Bài học nhỏ (chọn B4/B1/B5/B2 theo tình huống), 1 hàng số liệu. Tuần mới chưa đủ 3 ngày thì nhìn lại tuần trước. 6 ô số liệu cũ bỏ; phần đã viết trong bài học + memo gập vào “Những điều bạn đã viết”.
- Thẻ thành tựu (chạm thẻ trên cây): nhẹ hơn — icon M3 nhỏ cạnh tên, dòng thời gian 2 mốc, các mục ngăn bằng đường kẻ, nút “Về cây thành tựu” dạng tonal. Tab Hành trình không đổi.
- File duyệt chữ đợt 3: `Shin-routine-3.3.38_Duyet-chu-dot-3.xlsx` (22 dòng chữ mới).
- Vẫn treo: duyệt chữ đợt 2 (3.3.37) và đợt 3; 14 tên gọn hộp ném + “GAME/Chơi ngay”; file luật v2 (3.3.32); thử trên iPhone/Android thật.

---

# (Bản trước) M.Claude.3.3.37

## 0. Bản hiện tại: M.Claude.3.3.37 — Đợt 2 (mục 14, 17, 28)

- Gốc: M.Claude.3.3.36. APP_VER và cache: **M.Claude.3.3.37**; 54 tệp. Chi tiết ở CHANGELOG.
- Mã mới: SECTION batch37 cuối design-system.js / design-system.css; sửa trực tiếp `cuStepName` và `stPause` (core.js), Esc của menu ⋯ (extensions.js, listener keydown của sheet14).
- (14) Bài 3 bỏ “Thói lười có thể lây…/Siêng năng cũng lây” [T26 – V13]; Bài 5 bỏ “Khi đã thật sự muốn…” [T26 – V17]. Thang Bị→Đam mê (mô hình, không phải câu trích) vẫn giữ, chờ thầy quyết. Cách làm 14 thẻ đã sạch từ 3.3.27.
- (17) Bước 1 tạo thẻ riêng gọn: tên nằm trong khung xem trước, màu một hàng, biểu tượng 2 hàng 44px, nhịp dạng 2 nút + 1 dòng chú thích. Vừa 1 màn hình 390×844.
- (28) Nút ⋯ ở thanh dưới khi xem thẻ đang trên tay: Sửa công thức · Tạm dừng thẻ/Tiếp tục rèn · Cất thẻ. **Tạm dừng = thẻ vẫn trên tay, không tính ngày, không tính lỡ** (r2TrainingNow đã loại status 'pause'); Cất thẻ = về Thư viện (data-act unslot). Thẻ tạm dừng có nhãn trên mặt thẻ, nút chính “Tiếp tục rèn”, mục “Đang tạm dừng” ở trang Hôm nay. Nút Tạm dừng trong màn hình Sửa công thức đổi theo nghĩa mới.
- File duyệt chữ đợt 2: `Shin-routine-3.3.37_Duyet-chu-dot-2.xlsx` (19 dòng: nhóm A câu đã bỏ + mã nguồn, nhóm B chữ mới).
- **Đợt 3 (bản 3.3.38, gửi bản mẫu trước):** (16) tab Tiến bộ → “Shin nhìn lại tuần này” 7 phần; (29) trang Thành tựu kiểu M3. Mục 18 bỏ.
- Vẫn treo: 14 tên gọn hộp ném + chữ “GAME/Chơi ngay”; file duyệt chữ luật v2 (3.3.32); file duyệt chữ đợt 2; thử trên iPhone/Android thật (đặc biệt mục 22 và menu ⋯).

---

# (Bản trước) M.Claude.3.3.36

## 0. Bản hiện tại: M.Claude.3.3.36 — Sửa lỗi đợt 1 (memo 30 mục của người dùng)

- Gốc: M.Claude.3.3.35. APP_VER và cache: **M.Claude.3.3.36**; 54 tệp. Chi tiết từng mục ở CHANGELOG.
- Mã mới: SECTION batch36 cuối design-system.js / design-system.css.
- **Đợt 2 (bản 3.3.37, đã chốt):** (14) bỏ hết câu trích dẫn thầy Lê Long Sơn trong 5 bài học và Cách làm (liệt kê trong Excel duyệt chữ); (17) trang đầu tự tạo thẻ gọn hơn nhưng VẪN cho chọn màu và icon; (28) nút ⋯ ở thanh dưới khi xem thẻ: Sửa công thức, Tạm dừng thẻ, Cất thẻ.
- **Đợt 3 (bản 3.3.38, gửi bản mẫu trước):** (16) tab Tiến bộ → “Shin nhìn lại tuần này” 7 phần (động viên, giữ nhịp tốt nhất, ghi chú chăm nhất, cần để ý/mạng nhện, khởi đầu tốt nhưng chững lại, bài học nhỏ, 1 hàng số liệu); (29) trang Thành tựu kiểu M3 (cây + 3 số, bộ sưu tập thẻ theo bậc, dòng thời gian). Mục 18 bỏ.
- Vẫn treo: 14 tên gọn hộp ném + chữ “GAME/Chơi ngay”; file duyệt chữ luật v2 (3.3.32); thử trên iPhone/Android thật (đặc biệt mục 22).

---

# (Bản trước) M.Claude.3.3.35

## 0. Bản hiện tại: M.Claude.3.3.35 — Màu icon nhẹ nhàng hơn

- Gốc: M.Claude.3.3.34. APP_VER và cache: **M.Claude.3.3.35**; 54 tệp.
- Chỉ đổi màu trong SECTION m3-habit-icons (design-system.css): mức giữa PA1-A và A1 do người dùng chọn; ô chọn màu thẻ tự tạo theo cùng tông. Muốn chỉnh độ rực: sửa 10 cặp `--m3c/--m3o`.
- Vẫn treo: duyệt 14 tên gọn hộp ném và chữ thẻ game (3.3.33); file duyệt chữ luật v2 (3.3.32); chưa thử trên iPhone/Android thật.

---

# (Bản trước) M.Claude.3.3.34

## 0. Bản hiện tại: M.Claude.3.3.34 — Icon thói quen chuẩn Material 3; sửa hộp thoại Đang duy trì

- Gốc: M.Claude.3.3.33. APP_VER và cache: **M.Claude.3.3.34**; 54 tệp.
- Icon: mọi icon thói quen/thẻ tự tạo/bài học/nhóm đi qua SECTION m3-habit-icons (cuối design-system.js: `M3HI_PATHS`, `m3HabitSvg`, `m3HabitBadge`; cuối design-system.css: màu khung theo nhóm). Muốn đổi một icon: thay đường vẽ trong `M3HI_PATHS` (lấy từ Material Symbols Rounded, bản tô đặc 400).
- Hộp thoại kiểu cũ: SECTION sheet-sticky-head cuối design-system.css.
- Tệp đã đổi: design-system.js, design-system.css, scripts/core.js (2 chỗ glyph), cùng số phiên bản (core.js, sw.js, index.html, habit-game.html).
- Vẫn treo: duyệt 14 tên gọn hộp ném và chữ thẻ game (3.3.33); file duyệt chữ luật v2 (3.3.32); chưa thử trên iPhone/Android thật.

---

# (Bản trước) M.Claude.3.3.33

## 0. Bản hiện tại: M.Claude.3.3.33 — Game Tung thói quen tràn màn hình; bỏ Pomodoro và Tập thở

- Gốc: M.Claude.3.3.32. APP_VER và cache: **M.Claude.3.3.33**; 54 tệp.
- Đã làm: game Tung thói quen mở trọn màn hình, sân tràn, dải “Lướt xuống ↓”, nút nổi ✕/điểm/âm thanh/Xếp lại/Tung lên, lời nhắn 2 giây trên sân, rổ trong 1/3 phía trên (`HOOP_TOP = 0.22`), hộp ném theo phong cách hộp cũ nhiều hình/cỡ (`GAME33_BOX`, `GAME33_LABELS`). Chi tiết ở CHANGELOG.
- Tệp đã đổi: habit-game.html, assets/game/habit-game.js, design-game.css, scripts/extensions.js (SECTION routine-play, routine-pomodoro, breath18), scripts/interaction.js (eveningLibrary), styles/extensions.css (dòng game14, SECTION play33), cùng số phiên bản (core.js, sw.js, index.html).
- Đã bỏ Pomodoro và Tập thở khỏi tab Công cụ (mã còn, không lối vào); tab Công cụ chỉ còn thẻ game mới `shinGameCard33` (SECTION play33 trong styles/extensions.css).
- **Việc tiếp theo:** người dùng thử trên điện thoại thật; duyệt 14 tên gọn hộp ném và chữ “GAME”, “Chơi ngay”; có thể bàn công cụ mới (đã đề xuất: Trước – Sau cho 5S, Hộp 5 phút) khi người dùng yêu cầu (SECTION routine-pomodoro, extensions.js) trong cùng bản 3.3.33 theo yêu cầu người dùng.
- Vẫn treo: file duyệt chữ `Shin-routine-3.3.32_Duyet-chu-luat-v2.xlsx` (áp vào bản sau 3.3.33); chưa thử trên iPhone/Android thật.

---

# (Bản trước) M.Claude.3.3.32

## 0. Bản hiện tại: M.Claude.3.3.32 — Luật rèn luyện v2, đợt 3 (chữ) — đủ 3 đợt

- Gốc: M.Claude.3.3.31 (đợt 2, mục 0b) ← 3.3.30 (đợt 1, mục 0a). APP_VER và cache: **M.Claude.3.3.32**; 54 tệp.
- Đã làm đợt 3: “Trong app” bài 1, 4, 5 và hình đi kèm; gợi ý ghi chú hướng về ích lợi (`BEN32` trong extensions.js, bọc `noteHints34` ở SECTION rules-v2-text cuối rules-v2.js); thống nhất “Cấp” → “Bậc”; sửa ghi chú mẫu công thức giảm dần. Chi tiết ở CHANGELOG.
- **Chờ người dùng duyệt chữ** bằng file `Shin-routine-3.3.32_Duyet-chu-luat-v2.xlsx` (57 dòng, cột Mã khóa vị trí). Khi nhận lại: áp đúng từng dòng theo cột Mã, trang “Bổ sung” tìm trong mã nguồn, chỉnh đồng bộ chỗ tương tự, tạo bản 3.3.33.
- Việc còn lại sau duyệt: thử trên iPhone/Android thật, rồi đưa lên GitHub khi người dùng yêu cầu.

---

# (Bản trước) M.Claude.3.3.31

## 0b. M.Claude.3.3.31 — Luật rèn luyện v2, đợt 2 (giao diện)

- Gốc: M.Claude.3.3.30 (đợt 1 logic lõi, mô tả ở mục 0a bên dưới). APP_VER và cache: **M.Claude.3.3.31**; 54 tệp.
- Đã làm đủ 5 hạng mục đợt 2 + yêu cầu thêm của người dùng (xem CHANGELOG): thẻ duy trì ở trang Hôm nay; vuốt → màn hình đủ 3 nút; Shin hỏi khi mở app (1 lần/ngày); hỏi chỉnh công thức khi lên bậc; hỏi "Sang duy trì?" khi Thành nếp (nút trên thẻ giữ nguyên); "Lửa tuần · y/7 ngày có ghi" + ô Nghỉ/Lỡ trên Thẻ tuần và ảnh Thẻ tuần.
- Người dùng chốt: ngày chỉ có ghi bù tính như ngày chưa ghi đối với Lửa; Thành nếp giữ nút bấm "Sang duy trì", kèm câu hỏi.
- Mã giao diện v2 nằm cuối `scripts/rules-v2.js` (SECTION rules-v2-ui: `r2KeepToday`, `r2WeekFire`, `r2Ask`) và cuối `design-system.css` (SECTION rules-v2-ui: `.keep31`, `.wkfire31`, `.ask31`). `offerTier` và `masterShow` ở core.js.
- Dữ liệu mới: `S.r2.ask` (ngày Shin đã hỏi). Không đổi khóa lưu trữ.
- Còn biết: popup mừng lên bậc có thể che thông báo "Hoàn tác" ở đáy; chưa đổi chữ "cấp" → "bậc" trên thẻ và màn hình treo cây.
- **Việc tiếp theo — đợt 3 (chữ):** phần "Trong app" của bài Nền tảng 1, 4, 5 (LESSONS trong core.js, hình LV trong how-visual.js); gợi ý ghi chú hướng về ích lợi; ghi chú mẫu công thức "Lên cấp vẫn cần bạn xem lại và xác nhận" (habits.js); thống nhất "cấp" → "bậc" nếu người dùng muốn; duyệt các câu mới của đợt 1–2 (popup Lửa, Shin hỏi, câu hỏi lên bậc/duy trì, nhắc ngày Lỡ).

---

# (Bản trước) M.Claude.3.3.30

## 0a. M.Claude.3.3.30 — Luật rèn luyện v2, đợt 1 (logic lõi)

- Gốc: M.Claude.3.3.29 final. APP_VER và cache: **M.Claude.3.3.30**; 54 tệp (thêm `scripts/rules-v2.js`).
- Luật nguồn: mục 10 tài liệu Claude Docs "Shin routine — Logic rèn luyện" (đã chốt 15/11/2026), thay các mục 1–9 cũ.
- **Mọi cách tính nằm ở `scripts/rules-v2.js`:** `r2Calc()` (Lửa, ngày nghỉ, ngày lỡ, ngày có ghi), `r2Info(id)` (số ngày/lần + ngày chạm mốc), `r2Sync()` (tự lên bậc, Thành nếp), `r2KeepState(id)` (thẻ duy trì 7/14 ngày), `r2Week(ws)` (Lửa tuần, số ngày có ghi — dùng cho đợt 2). Hàm cũ gọi vào đây: `streak()`→Lửa, `daysAt()/dayCount()`→r2Count, `ready()`→false, `vitality()`→r2KeepState.
- Quy ước tính đã chọn (người dùng cần biết):
  - "Đúng ngày" = `review16[ngày][thẻ].createdAt` cùng ngày (nếu thiếu thì dựa `S.bf`). Ngày chỉ có ghi bù = như ngày chưa ghi đối với Lửa (có thể là ngày nghỉ hoặc −1), nhưng thẻ vẫn được tính ngày theo bản ghi bù.
  - Ngày nghỉ được cộng ngày cho mọi thẻ hằng ngày **đang rèn** hôm đó và chưa ghi gì. "Đang rèn" lấy từ ảnh chụp theo ngày `S.r2act` (ghi khi lưu); ngày trước bản 3.3.30 thì suy: đã bắt đầu, chưa Thành nếp, đang trên tay hoặc còn bản ghi về sau.
  - Ngày không có thẻ đang rèn nào thì không tính lỡ. Ngày hôm nay chưa ghi thì chưa xét.
  - Bậc không tự hạ (chỉ hoàn tác đúng ghi nhận vừa làm lên bậc mới trả bậc cũ). Thành nếp vẫn bấm "Sang duy trì" như cũ.
  - Thẻ duy trì: đếm từ lần Đã làm/Một phần gần nhất, hoặc từ ngày Thành nếp nếu chưa làm lại.
- Dữ liệu: giữ 3 khóa lưu trữ; thêm `S.r2` {v:2, migrated} và `S.r2act`. Trường cũ (`xp`, `tstamps`, `growth.goals`, `growth.challenges`, `cf`, `week[].buddy`) giữ nguyên, không còn dùng (trải nghiệm thử thách cũ vẫn hiện trong nhật ký).
- Lần mở đầu ở v2: tính lại bậc, Lửa từ lịch sử; Shin báo thẻ đã lên bậc (`r2Notice`, gọi từ boot.js). Demo: chỉnh bậc lặng lẽ.
- **Đợt 2 — đã làm ở 3.3.31:** thẻ duy trì ở trang Hôm nay kèm "làm gần nhất"; màn hình sau khi vuốt hiện đủ 3 nút; Shin hỏi khi mở app (1 lần/ngày); câu hỏi "chỉnh công thức?" khi lên bậc (gắn vào `offerTier`, hiện chỉ đóng popup); dòng "Lửa tuần · y/7 ngày có ghi" trên Thẻ tuần (dùng `r2Week`). Nhãn trên thẻ còn ghi "CẤP n · …".
- **Chưa làm (đợt 3 — chữ):** phần "Trong app" của bài Nền tảng 1, 4, 5 (LESSONS trong core.js và hình LV trong how-visual.js vẫn nói xác nhận, chuỗi về 0, mạng nhện 7 ngày, mốc 3/6/12, nâng việc); gợi ý ghi chú hướng về ích lợi; ghi chú mẫu công thức "Lên cấp vẫn cần bạn xem lại và xác nhận" (habits.js, routine-templates); chữ "cấp" → "bậc" nếu muốn thống nhất.
- Không gắn app với học phần: Sổ tay đổi "Báo cáo cuối học phần" → "Báo cáo cho thầy cô". `GROUPS[].d` ("Gợi ý Học phần n") còn trong dữ liệu nhưng không hiện trên giao diện (đã quét Hôm nay, Tuần, Hành trình, Thư viện, Sổ tay, tạo thẻ).

---

# (Bản trước) M.Claude.3.3.29 — BẢN FINAL

## 0b. M.Claude.3.3.29 — "Cách làm" và 5 bài "Nền tảng rèn luyện" bằng hình

- Gốc: M3.3.20–5S.2 (các mục 1–6 bên dưới vẫn đúng cho phần còn lại của app). APP_VER và cache đều là **M.Claude.3.3.29**; gói 53 tệp.
- Người dùng đã chốt: **PA2 "Bước bằng hình"**; nhân vật kết hợp (người làm động tác, Shin nhắc mẹo); làm cả 4 ý: A tranh đôi Bây giờ ↔ Sang Nhật, B "Tìm điểm chưa ổn", C hình động nhẹ, D Shin trong khung/"Shin mách nhỏ".
- Nét vẽ **bắt buộc đồng bộ** với hình gốc `person()`/`illSVG()` (viền #2B2420, áo #EAF4F5, quần #2F3D5A, da #F3CDA8, nền khung #F4F6FE, chữ xanh #1D5FD1, xanh lá #0B6E4B, đỏ #8E2F22). Bản thử M3.3.21 bị bỏ chính vì không đồng bộ.
- Đợt 1–3 đã được duyệt (đợt 3 có góp ý bàn tay, đã sửa bằng `hand()`). Đợt 4 (memo, xinloi, viecko) chờ duyệt. Đủ 14/14 thói quen.
- 5 bài "Nền tảng rèn luyện" (b1–b5) có hình ở thẻ Hiểu, Senpai kể, Trong app (mục `LV`). Đã sửa 4 chỗ chữ bài học cho khớp app (3.3.28).
- Mặt sau thẻ (3.3.29): 8 hình mới (som, 5s, xinloi, 5phut, camxuc, vandong, viecko, horenso) + 6 hình cũ giữ lại; nền dải hình phẳng #173F79, mép dưới mờ dần. Không thay lại hình đã chốt khi chưa có yêu cầu.
- Logic rèn luyện được mô tả đầy đủ trong tài liệu Claude Docs "Shin routine — Logic rèn luyện (bản để góp ý)"; người dùng sẽ góp ý ở phiên sau, chưa đổi logic.
- **Trạng thái:** bản final; việc tiếp theo là thử trên điện thoại thật (Safari/iPhone, Android) rồi đưa lên GitHub. Các bản 3.3.22–3.3.27 chỉ để đối chiếu.
- Không trích dẫn lời Thầy Lê Long Sơn trong app (đã xóa ở 3.3.27; câu hay đã chuyển thành chữ của khóa học).
- Bàn tay: luôn dùng `arm()`/`hand()` (lòng bàn tay + ngón cái), không vẽ tay bằng hình tròn.
- Lời thoại (bóng chữ) không được đè lên nhân vật: luôn đặt bóng chữ cao hơn đỉnh đầu, kiểm tra bằng ảnh chụp từng khung.
- Hình cũ trong `ill:[...]` được giữ tự động khi thói quen có mục HV.
- Quy ước đã chốt: cân bằng nhân vật nam/nữ (`girl:true`); nhãn tranh đôi mặc định Ở TRƯỜNG / Ở NHẬT, dùng BÂY GIỜ / SANG NHẬT khi bối cảnh là đời sống ngoài trường; bài Tìm điểm (`type:'spot'`) dùng cho Ngủ, Ăn uống, 5S. Kế hoạch: đợt 2–4 cho 10 thói quen còn lại, mỗi đợt 3–4 thói quen, giữ 9 hình cũ (gosen, bow, desk, shoes, time, memo, sorry; thanks có thể gắn cho Chào hỏi).
- Nơi sửa: `scripts/how-visual.js` (dữ liệu hình HV[id] = duo, steps[3], key, pair, tip, spot) và SECTION how-visual cuối `design-system.css`. Thêm thói quen mới = thêm một mục vào HV; không sửa core.js.
- Không đổi dữ liệu/tiến độ. Chưa thử WebKit/Safari và điện thoại thật.

---

# (Bối cảnh bản gốc) bàn giao sau phiên 14/11/2026

## 1. Bản nào là bản đúng để làm tiếp?

**Dùng chính gói này: Shin routine M3.3.20–5S.2, bản chốt, 52 tệp.**

- Phiên bản chức năng `APP_VER`: **M3.3.20**.
- Phiên bản cache `sw.js VERSION` và các đường dẫn JS/CSS `?v=`: **M3.3.20-5S.2**.
- Gốc trực tiếp: M3.3.20–5S, cache 5S.1, bản có 14 hình vector riêng ở mặt sau và hiệu ứng lật thường trú.
- Lần này thay đúng 7 hình mặt sau đã được người dùng duyệt. Giữ 7 hình còn lại, nội dung, cách tính tiến độ và dữ liệu như bản gốc.
- **M3.3.21-5S-preview không phải bản mới nhất để tiếp tục.** Đó là thử nghiệm hình minh họa/tương tác trong “Cách làm” của Quan sát–Memo, 5S và Lắng nghe–Sửa sai. Người dùng đã tạm bỏ bản thử này và yêu cầu quay về M3.3.20–5S. Không tự đưa nó trở lại.
- Không cần truy cập hội thoại cũ hoặc các thư mục xem mẫu để chạy hay chỉnh app: mã nguồn và hình đã có đủ trong ZIP này.

## 2. Tiến độ và quyết định đã chốt

| Việc | Trạng thái |
| --- | --- |
| Dọn 5S, gom nguồn, giảm số tệp, hướng dẫn AI | Đã làm ở bản 5S trước; giữ trong gói này |
| Mặt sau xanh đậm, chữ xanh trắng, hình trên 1/4 thẻ | Đã áp dụng cho 14 thẻ |
| Lật mượt bằng hai mặt thường trú, nhớ cuộn riêng | Giữ nguyên triển khai M3.3.20 |
| Vẽ lại 7 hình chưa đạt | Đã duyệt đủ và áp dụng trong 5S.2 |
| Đưa hình vào “Cách làm” | Mở lại ở M.Claude.3.3.22 theo PA2; đợt 1 xong (4 thói quen), chờ duyệt |
| Yêu cầu đã duyệt còn chờ lập trình | Không còn trong phạm vi phiên này |
| Kiểm tra | Xem kết quả thực sự trong VALIDATION.json; không coi hướng dẫn kiểm tra là kết quả đã chạy |

### Bộ 7 hình cuối cùng — không thay bằng các mẫu từng bị loại

| Số người dùng duyệt | Thẻ / ID trong mã | Hình đã chốt |
| --- | --- | --- |
| 1 | Đúng giờ, đúng hẹn / `som` | Bình minh qua cửa sổ, đồng hồ báo thức và cặp đã chuẩn bị |
| 2 | 5S / `5s` | Chim rõ đầu, mỏ và hai cánh cất lên trên mặt nước trong |
| 3 | Chi tiêu / `chitieu` | Ví tiền, đồng yên tròn rõ nét, chồng tiền và mầm cây |
| 4 | Vận động mỗi ngày / `vandong` | Tre vươn cao qua từng đốt nhỏ — 継続は力なり |
| 5 | Dám thử việc khó / `viecko` | Chim non tách vỏ trứng — 案ずるより産むが易し |
| **6A** | Báo cáo và xác nhận / `horenso` | **Cầu đá trong sương sớm**, phong cảnh suối và núi — 石橋を叩いて渡る |
| **7B** | Giúp đỡ / `giup` | **Hoa và cánh bướm**, đồi và nắng nhẹ — 情けは人の為ならず |

Người dùng thích nét vector đơn giản, nhẹ, dễ nhận ra; riêng 4–7 thích ẩn dụ theo câu thành ngữ Nhật, không có hình người. 6–7 đã chọn phong cảnh/thiên nhiên nên thơ; không dùng lại búa gõ cầu hoặc hai ngọn nến. Không cần xin duyệt lại bộ hình đã chốt khi chỉ bảo trì mã mà giữ nguyên hình.

## 3. Công cụ AI tiếp theo cần làm gì?

1. Đọc file này, README.md, AGENTS.md, AI_CONTEXT.md, CHANGELOG.md và VALIDATION.json. Nhận diện đây là **M3.3.20-5S.2**, không chọn bản thử 3.3.21 theo số phiên bản lớn hơn.
2. Tóm tắt ngắn bản hiện tại và nhận yêu cầu mới của người dùng. Không tự mở lại hạng mục “Cách làm bằng hình” hay tự mở rộng phạm vi.
3. Tạo bản sao/nhánh riêng trước khi sửa. Giữ gói chốt này để đối chiếu và quay lại.
4. Đọc đúng phần nguồn chịu trách nhiệm; sửa ở đó, tránh thêm lớp vá hoặc tệp mới cho từng chỉnh sửa nhỏ. Trước khi xóa mã, truy vết phụ thuộc thật.
5. Kiểm tra phù hợp với thay đổi trên điện thoại nhỏ, Chrome và WebKit; kiểm tra dữ liệu cũ, offline và đường dẫn con GitHub Pages. Chỉ ghi những bài kiểm tra đã chạy. Nói rõ nếu chưa thử Android/iPhone thật.
6. Cập nhật phiên bản cache khi thay tài nguyên; cập nhật các file bàn giao, tiến độ và kết quả kiểm tra. Trả **gói hoàn chỉnh dưới 100 tệp**, không chỉ tệp đã sửa. Không tự tải lên GitHub hoặc phát hành công khai khi chưa có yêu cầu.

Nếu việc tiếp theo chỉ là đăng bản đã chốt: dùng nguyên gói này, xác nhận đúng kho/địa chỉ triển khai theo yêu cầu mới, kiểm tra website sau cập nhật; không cần thiết kế lại các hình đã duyệt.

## 4. Những điểm phải giữ khi lập trình

### Nguồn và hình

- Đây là app HTML/CSS/JS chạy tĩnh, không cần build, không cần cài thư viện để chạy. `index.html` nằm ngay gốc gói; game là tài liệu riêng `habit-game.html`.
- Nguồn trực tiếp ở `scripts/`, `styles/`, `design-system.js`, `design-system.css`. Bảng chức năng chi tiết ở AI_CONTEXT.md; tên SECTION và source-map.json giúp tìm vị trí cũ.
- Classic scripts dùng global và bọc hàm theo thứ tự. Không đổi thứ tự tải, chuyển sang module hoặc xóa hàm bọc chỉ vì thấy tên bị gán lại.
- **Nguồn hình duy nhất để chỉnh: `SHIN_BACK_ART` trong `design-system.js`.** Cả 14 hình là SVG nội tuyến, dùng được offline; không phải tìm/tải hình bên ngoài. Không tạo một bộ nguồn hình thứ hai rồi quên đồng bộ.
- `SHIN_BACK_ART_VIEWBOX` ghi 480×220 cho 7 hình mới; 7 hình cũ dùng mặc định 340×150. Giữ tỷ lệ khi hiển thị. ID gradient được đặt tiền tố theo thói quen để không xung đột.
- Không xây lại popup/DOM thẻ khi lật xong. Giữ `shinCardFaces`, `touchFlipCard`, `shinActivePaper`, trạng thái inert/aria-hidden và cuộn riêng hai mặt.

### Dữ liệu và cách tính tiến độ

- Ba khóa lưu trữ phải giữ: `shin-curriculum16-v1-data`, `shin-curriculum16-v1-demo`, `shin-curriculum16-v1-mode`.
- Tiến độ bước giao diện không phải tiến độ rèn: thanh bước dùng `shinFlowProgress`; ngày rèn, mục tiêu tuần, cấp thẻ, phần trăm và XP có quy tắc riêng trong mã hiện hành. Không gộp hay thay cách tính để khớp một hình/nhãn.
- Không reset dữ liệu, tự bật Demo thay bài làm thật, hoặc đổi schema khi chỉ chỉnh giao diện. Nháp ghi chú/check-in khác với bản ghi đã lưu; không đổi thời điểm ghi nhận.
- Kiểm tra bằng dữ liệu tổng hợp/Demo trong trình duyệt riêng. Gói bàn giao không chứa bài làm học viên hoặc khóa bí mật.
- Bài làm nằm trong trình duyệt theo địa chỉ web. Khi đổi thiết bị, tên miền, đường dẫn hoặc xem ở localhost, cần xuất/khôi phục bản sao để chuyển dữ liệu; dữ liệu không tự đi theo ZIP mã nguồn.

### Điện thoại và thiết kế

- Ưu tiên Android/iPhone, rộng 320–430 px; thử chiều cao thấp, chữ dài, bàn phím, phóng to và giảm chuyển động khi phù hợp.
- Giữ hệ chữ và thành phần dùng chung; không đưa lại JavaScript đo rồi co/giãn từng chữ. Nhãn T2–CN và mục tiêu 1–7 cần nằm gọn một hàng; popup nằm trong màn hình.
- Tiếp tục theo Material 3 với bảng màu đã dùng. Không tuyên bố toàn app đạt mọi tiêu chuẩn Material 3 hay không còn mọi lỗi chỉ dựa vào một lần kiểm tra.
- Các lớp CSS và hàm bọc cũ còn có phụ thuộc. Lần 5S đã giảm tệp có kiểm chứng, chưa viết lại toàn bộ kiến trúc. Nếu cần dọn tiếp, làm từng luồng và so sánh trước/sau.

## 5. Bàn giao, tải GitHub và kiểm tra lại

- ZIP là **52 tệp** gồm app, tài nguyên, giấy phép, hướng dẫn và công cụ kiểm tra. Giải nén sẽ thấy `index.html` ngay gốc; tải toàn bộ nội dung đã giải nén và giữ cấu trúc thư mục. Không tải riêng ZIP để thay website, không bỏ font/âm thanh/game vì tưởng là tệp thừa.
- Chạy `node tools/verify.mjs` để kiểm tra cấu trúc, cú pháp và cache. Lệnh này không thay thế thử giao diện.
- Xem local: chạy `python3 -m http.server 8080 --bind 127.0.0.1` trong thư mục gói rồi mở `http://127.0.0.1:8080/`. Điện thoại cần địa chỉ HTTPS có thể truy cập; localhost trên máy không phải link điện thoại.
- Sau triển khai, mở lại khi có mạng và nhận bản cập nhật trong app nếu được nhắc; xác nhận hình 6A/7B, bản ghi cũ và offline. Không hướng dẫn xóa dữ liệu trình duyệt để ép cập nhật.
- Các kiểm tra tự động sử dụng trình duyệt mô phỏng, không thay cho kiểm tra độ mượt, bàn phím và giọng đọc trên điện thoại thật. VALIDATION.json phân biệt kết quả hiện tại và giới hạn.

## 6. Câu nhắn có thể gửi kèm ZIP ở phiên sau

> Đây là bản Shin routine M3.3.20–5S.2 đã chốt cuối phiên, gồm 52 tệp. Hãy đọc HANDOFF.md, README.md, AGENTS.md, AI_CONTEXT.md, CHANGELOG.md và VALIDATION.json trước khi làm. Dùng chính gói này làm gốc, sửa trên bản sao. Bộ hình mặt sau đã duyệt đủ, cuối cùng chọn 6A và 7B; không dùng lại bản thử M3.3.21 “Cách làm bằng hình”. Giữ dữ liệu và cách tính tiến độ, ưu tiên giao diện điện thoại. Sau yêu cầu mới của tôi, hãy kiểm tra, cập nhật đầy đủ tài liệu bàn giao và gửi lại gói hoàn chỉnh dưới 100 tệp.
