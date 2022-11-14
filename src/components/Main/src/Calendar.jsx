import styled from "styled-components";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";

import React, { useEffect, useRef, useState, useCallback } from "react";

import Calendar from "@toast-ui/react-calendar";
import "tui-calendar/dist/tui-calendar.css";
import "tui-time-picker/dist/tui-time-picker.css";
import "tui-date-picker/dist/tui-date-picker.css";
import myTheme from "./myTheme.jsx";

const today = new Date();
const getDate = (type, start, value, operator) => {
  start = new Date(start);
  type = type.charAt(0).toUpperCase() + type.slice(1);

  if (operator === "+") {
    start[`set${type}`](start[`get${type}`]() + value);
  } else {
    start[`set${type}`](start[`get${type}`]() - value);
  }

  return start;
};

const CalendarComponent = () => {
  const [selectedWeek, setSelectedWeek] = useState(4);
  //   cal = React.createcal();
  const cal = useRef();

  //   calendarInst = null;

  //   state = {
  //     dateRange: "",
  //     view: "month",
  //     viewModeOptions: [
  //       {
  //         title: "월간",
  //         value: "month",
  //       },
  //       {
  //         title: "2주",
  //         value: "2 weeks",
  //       },
  //       {
  //         title: "1주",
  //         value: "week",
  //       },
  //     ],
  //   };

  //   componentDidMount() {
  //     this.calendarInst = this.cal.current.getInstance();
  //     this.setState({ view: this.props.view });

  //     this.setRenderRangeText();
  //   }

  //   onAfterRenderSchedule(res) {
  //     console.group("onAfterRenderSchedule");
  //     console.log("Schedule Info : ", res.schedule);
  //     console.groupEnd();
  //   }

  //   onBeforeDeleteSchedule(res) {
  //     console.group("onBeforeDeleteSchedule");
  //     console.log("Schedule Info : ", res.schedule);
  //     console.groupEnd();

  //     const { id, calendarId } = res.schedule;

  //     this.calendarInst.deleteSchedule(id, calendarId);
  //   }

  //   onChangeSelect(ev) {
  //     this.setState({ view: ev.target.value });

  //     this.setRenderRangeText();
  //   }

  //   onClickDayname(res) {
  //     // view : week, day
  //     console.group("onClickDayname");
  //     console.log(res.date);
  //     console.groupEnd();
  //   }

  const onClickNavi = (action) => {
    console.log(cal.current.getInstance);
    cal.current.getInstance()[action]();
    setRenderRangeText();
  };

  //   onClickSchedule(res) {
  //     console.group("onClickSchedule");
  //     console.log("MouseEvent : ", res.event);
  //     console.log("Calendar Info : ", res.calendar);
  //     console.log("Schedule Info : ", res.schedule);
  //     console.groupEnd();
  //   }

  //   onClickTimezonesCollapseBtn(timezonesCollapsed) {
  //     // view : week, day
  //     console.group("onClickTimezonesCollapseBtn");
  //     console.log("Is Collapsed Timezone? ", timezonesCollapsed);
  //     console.groupEnd();

  //     const theme = {};
  //     if (timezonesCollapsed) {
  //       theme["week.daygridLeft.width"] = "200px";
  //       theme["week.timegridLeft.width"] = "200px";
  //     } else {
  //       theme["week.daygridLeft.width"] = "100px";
  //       theme["week.timegridLeft.width"] = "100px";
  //     }

  //     this.calendarInst.setTheme(theme);
  //   }

  const setRenderRangeText = () => {
    const view = cal.current.getInstance().getViewName();
    const calDate = cal.current.getInstance().getDate();
    const rangeStart = cal.current.getInstance().getDateRangeStart();
    const rangeEnd = cal.current.getInstance().getDateRangeEnd();
    let year = calDate.getFullYear();
    let month = calDate.getMonth() + 1;
    let date = calDate.getDate();
    let dateRangeText = "";
    let endMonth, endDate, start, end;

    console.log(view);

    switch (selectedWeek) {
      case 4:
        year = rangeStart.getFullYear();
        month = rangeStart.getMonth() + 1;
        date = rangeStart.getDate();
        endMonth = rangeEnd.getMonth() + 1;
        endDate = rangeEnd.getDate();

        start = `${year}-${month < 10 ? "0" : ""}${month}-${
          date < 10 ? "0" : ""
        }${date}`;
        end = `${year}-${endMonth < 10 ? "0" : ""}${endMonth}-${
          endDate < 10 ? "0" : ""
        }${endDate}`;
        dateRangeText = `${start} ~ ${end}`;
        break;
      case 2:
        year = rangeStart.getFullYear();
        month = rangeStart.getMonth() + 1;
        date = rangeStart.getDate();
        endMonth = rangeEnd.getMonth() + 1;
        endDate = rangeEnd.getDate();

        start = `${year}-${month < 10 ? "0" : ""}${month}-${
          date < 10 ? "0" : ""
        }${date}`;
        end = `${year}-${endMonth < 10 ? "0" : ""}${endMonth}-${
          endDate < 10 ? "0" : ""
        }${endDate}`;
        dateRangeText = `${start} ~ ${end}`;
        break;
      default:
        year = rangeStart.getFullYear();
        month = rangeStart.getMonth() + 1;
        date = rangeStart.getDate();

        start = `${year}-${month < 10 ? "0" : ""}${month}-${
          date < 10 ? "0" : ""
        }${date}`;
        dateRangeText = `${start}`;
        break;
    }

    setDateRange(dateRangeText);
  };

  const [dateRange, setDateRange] = useState("");

  useEffect(() => {
    setRenderRangeText();
  }, [selectedWeek]);

  //   onBeforeUpdateSchedule(event) {
  //     const { schedule } = event;
  //     const { changes } = event;

  //     this.calendarInst.updateSchedule(schedule.id, schedule.calendarId, changes);
  //   }

  //   onBeforeCreateSchedule(scheduleData) {
  //     const { calendar } = scheduleData;
  //     const schedule = {
  //       id: String(Math.random()),
  //       title: scheduleData.title,
  //       isAllDay: scheduleData.isAllDay,
  //       start: scheduleData.start,
  //       end: scheduleData.end,
  //       category: scheduleData.isAllDay ? "allday" : "time",
  //       dueDateClass: "",
  //       location: scheduleData.location,
  //       raw: {
  //         class: scheduleData.raw["class"],
  //       },
  //       state: scheduleData.state,
  //     };

  //     if (calendar) {
  //       schedule.calendarId = calendar.id;
  //       schedule.color = calendar.color;
  //       schedule.bgColor = calendar.bgColor;
  //       schedule.borderColor = calendar.borderColor;
  //     }

  //     this.calendarInst.createSchedules([schedule]);
  //   }

  // render() {
  //   const { dateRange, view, viewModeOptions } = this.state;
  //   const selectedView = view || this.props.view;

  const onAfterRenderSchedule = () => {};
  const onClickDayname = () => {};
  const onClickTimezonesCollapseBtn = () => {};
  const onClickSchedule = useCallback((e) => {
    console.log("schedule");

    const { calendarId, id } = e.schedule;
    const el = cal.current.calendarInst.getElement(id, calendarId);

    console.log(e, el.getBoundingClientRect());
  }, []);

  const onBeforeCreateSchedule = useCallback((scheduleData) => {
    console.log(scheduleData);

    const schedule = {
      id: String(Math.random()),
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? "allday" : "time",
      dueDateClass: "",
      location: scheduleData.location,
      raw: {
        class: scheduleData.raw["class"],
      },
      state: scheduleData.state,
    };

    cal.current.calendarInst.createSchedules([schedule]);
  }, []);

  const onBeforeDeleteSchedule = useCallback((res) => {
    console.log(res);

    const { id, calendarId } = res.schedule;

    cal.current.calendarInst.deleteSchedule(id, calendarId);
  }, []);

  const onBeforeUpdateSchedule = useCallback((e) => {
    console.log(e);

    const { schedule, changes } = e;

    cal.current.calendarInst.updateSchedule(
      schedule.id,
      schedule.calendarId,
      changes
    );
  }, []);

  return (
    <Div>
      <WhichDate>
        <span>
          <GoBtn
            type="button"
            className="btn btn-default btn-sm move-day"
            onClick={() => onClickNavi("prev")}
          >
            &lt;
          </GoBtn>
          <DateName>{dateRange}</DateName>
          <TodayBtn
            type="button"
            className="btn btn-default btn-sm move-today"
            onClick={() => onClickNavi("today")}
          >
            Today
          </TodayBtn>
          <GoBtn
            type="button"
            className="btn btn-default btn-sm move-day"
            onClick={() => onClickNavi("next")}
          >
            &gt;
          </GoBtn>
        </span>
      </WhichDate>
      <FlexNavi>
        <NaviBtn
          selected={selectedWeek === 4}
          onClick={() => setSelectedWeek(4)}
        >
          4주
        </NaviBtn>
        <NaviBtn
          selected={selectedWeek === 2}
          onClick={() => setSelectedWeek(2)}
        >
          2주
        </NaviBtn>
        <NaviBtn
          selected={selectedWeek === 1}
          onClick={() => setSelectedWeek(1)}
        >
          1주
        </NaviBtn>
        <NaviBtn
          selected={selectedWeek === "통계"}
          onClick={() => setSelectedWeek("통계")}
        >
          통계
        </NaviBtn>
      </FlexNavi>
      <CalendarDiv>
        <Calendar
          ref={cal}
          usageStatistics={false}
          calendars={[
            {
              id: "0",
              name: "Private",
              bgColor: "#9e5fff",
              borderColor: "#9e5fff",
            },
            {
              id: "1",
              name: "Company",
              bgColor: "#00a9ff",
              borderColor: "#00a9ff",
            },
          ]}
          defaultView="month"
          // disableDblClick={true}
          height="575px"
          isReadOnly={false}
          month={{
            visibleWeeksCount: selectedWeek,
            startDayOfWeek: 0,
          }}
          schedules={[
            {
              id: "1",
              calendarId: "0",
              title: "TOAST UI Calendar Study",
              category: "time",
              dueDateClass: "",
              start: today.toISOString(),
              end: getDate("hours", today, 3, "+").toISOString(),
            },
            {
              id: "2",
              calendarId: "0",
              title: "Practice",
              category: "milestone",
              dueDateClass: "",
              start: getDate("date", today, 1, "+").toISOString(),
              end: getDate("date", today, 1, "+").toISOString(),
              isReadOnly: true,
            },
            {
              id: "3",
              calendarId: "0",
              title: "FE Workshop",
              category: "allday",
              dueDateClass: "",
              start: getDate("date", today, 2, "-").toISOString(),
              end: getDate("date", today, 1, "-").toISOString(),
              isReadOnly: true,
            },
            {
              id: "4",
              calendarId: "0",
              title: "Report",
              category: "time",
              dueDateClass: "",
              start: today.toISOString(),
              end: getDate("hours", today, 1, "+").toISOString(),
            },
          ]}
          template={
            {
              // milestone(schedule) {
              //   return `<span style="color:#fff;background-color: ${schedule.bgColor};">${schedule.title}</span>`;
              // },
              // milestoneTitle() {
              //   return "Milestone";
              // },
              // allday(schedule) {
              //   return `${schedule.title}<i class="fa fa-calresh"></i>`;
              // },
              // alldayTitle() {
              //   return "All Day";
              // },
            }
          }
          // theme={myTheme}
          timezones={[
            {
              timezoneOffset: 540,
              displayLabel: "GMT+09:00",
              tooltip: "Seoul",
            },
          ]}
          useCreationPopup={true}
          useDetailPopup={true}
          view={"month"}
          onAfterRenderSchedule={onAfterRenderSchedule}
          onBeforeDeleteSchedule={onBeforeDeleteSchedule}
          onClickDayname={onClickDayname}
          onClickSchedule={onClickSchedule}
          onClickTimezonesCollapseBtn={onClickTimezonesCollapseBtn}
          onBeforeUpdateSchedule={onBeforeUpdateSchedule}
          onBeforeCreateSchedule={onBeforeCreateSchedule}
        />
      </CalendarDiv>
    </Div>
  );
  // }
};
// return <Story />;
// });

let Div = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 60vw;
  height: 793px;
`;

let WhichDate = styled.div`
  width: 85%;
  margin: 42px auto 0 auto;
`;

let GoBtn = styled.button`
  width: 14px;
  font-weight: 700;
  color: black;
  background-color: white;
  border: none;
  margin: 0 14px;
  font-size: 20px;
`;

let DateName = styled.span`
  margin-right: 17px;
  font-weight: 700;
  font-size: 20px;
`;

let FlexNavi = styled.div`
  display: flex;
  background: #f9f9f9;
  border: 1px solid #efeff1;
  width: 90%;
  margin: 28px auto;
  height: 62px;
`;

let NaviBtn = styled.div`
  width: 42px;
  border-bottom: ${(props) => (props.selected ? "2px solid #7A6CD9" : "none")};
  color: ${(props) => (props.selected ? "#7A6CD9" : "#6C6C6C")};
  font-weight: ${(props) => (props.selected ? "700" : "400")};
  padding: 19px 3px;
  margin: 0 32px;
  text-align: center;
`;

let CalendarDiv = styled.div`
  width: 90%;
  margin: 0 auto;
`;

let TodayBtn = styled.button`
  width: 50px;
  text-align: center;
  color: #9f99bd;
  border: 1px solid #9f99bd;
  border-radius: 5px;
  background-color: white;
`;

export default CalendarComponent;
