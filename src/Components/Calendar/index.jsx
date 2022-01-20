import React, {useState} from 'react';
// import thư viện và style tương ứng
// import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
function Calendar() {
// state lưu trữ ngày tháng hiện tại
  const [date, setDate] = useState(new Date());

  return (
      <Flatpickr
        value={date} // giá trị ngày tháng
        // các option thêm cho thư viện
        options={{
          dateFormat: "d-m-Y" // format ngày giờ
        }}
        // event
        onChange={(dateSelect) => setDate(dateSelect)}
      />
  );
}

export default Calendar;