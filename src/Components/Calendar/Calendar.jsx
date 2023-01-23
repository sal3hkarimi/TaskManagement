import "./styles/style.css";
import { ChevronLeftIcon, ChevronRightIcon, Cog6ToothIcon, EyeIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import {MenuBoardIcon, CalendarIcon} from "../Icons"

function Calendar() {
    return (
        <div className="calendar-warpper">
            <div className="box-calendar">
                <div className="sidebar">
                    <div className="icon-box"><Squares2X2Icon /></div>
                    <div className="icon-box"><MenuBoardIcon /></div>
                    <div className="icon-box"><CalendarIcon /></div>
                    <div className="icon-box"><Cog6ToothIcon /></div>
                </div>
                <div className="main-calendar">

                    <div className="todo-tasks">
                        <div className="title-task">
                            <h5>تسک‌های امروز</h5>
                            <span>۴</span>
                        </div>
                        <div className="tasks">
                            <div className="task">
                                <div className="box-task">
                                    <div className="icon-box"><MenuBoardIcon /></div>
                                    <p>بررسی کابل برق</p>
                                </div>
                                <div className="icon-box"><EyeIcon /></div>
                            </div>
                            <div className="task">
                                <div className="box-task">
                                    <div className="icon-box"><MenuBoardIcon /></div>
                                    <p>بررسی کابل برق</p>
                                </div>
                                <div className="icon-box"><EyeIcon /></div>
                            </div>
                            <div className="task">
                                <div className="box-task">
                                    <div className="icon-box"><MenuBoardIcon /></div>
                                    <p>بررسی کابل برق</p>
                                </div>
                                <div className="icon-box"><EyeIcon /></div>
                            </div>
                            <div className="task">
                                <div className="box-task">
                                    <div className="icon-box"><MenuBoardIcon /></div>
                                    <p>بررسی کابل برق</p>
                                </div>
                                <div className="icon-box"><EyeIcon /></div>
                            </div>
                        </div>
                    </div>
                    <div className="break-line"></div>

                    <div className="calendar">
                        <div className="calendar-title">
                            <div className="icon-box"><CalendarIcon /></div>
                            <h5>تقویم</h5>
                        </div>

                        <div className="mouth">
                            <h6>دی ۱۴۰۱</h6>
                            <div className="arrows">
                                <div className="icon-box"><ChevronRightIcon /></div>
                                <div className="icon-box"><ChevronLeftIcon /></div>
                            </div>
                        </div>

                        <div className="cal-table">
                            <div className="cal-column">
                                <div className="name-week">شنبه</div>
                                <div className="day">۱</div>
                                <div className="day">۲</div>
                                <div className="day">۳</div>
                                <div className="day">۴</div>
                            </div>
                            <div className="cal-column">
                                <div className="name-week">یکشنبه</div>
                                <div className="day">۱</div>
                                <div className="day">۲</div>
                                <div className="day">۳</div>
                                <div className="day">۴</div>
                            </div>
                            <div className="cal-column">
                                <div className="name-week">دوشنبه</div>
                                <div className="day">۱</div>
                                <div className="day">۲</div>
                                <div className="day">۳</div>
                                <div className="day">۴</div>
                            </div>
                            <div className="cal-column">
                                <div className="name-week">سه شنبه</div>
                                <div className="day">۱</div>
                                <div className="day">۲</div>
                                <div className="day">۳</div>
                                <div className="day">۴</div>
                            </div>
                            <div className="cal-column">
                                <div className="name-week">چهارشنبه</div>
                                <div className="day">۱</div>
                                <div className="day">۲</div>
                                <div className="day">۳</div>
                                <div className="day">۴</div>
                            </div>
                            <div className="cal-column">
                                <div className="name-week">پنج شنبه</div>
                                <div className="day">۱</div>
                                <div className="day">۲</div>
                                <div className="day">۳</div>
                                <div className="day">۴</div>
                            </div>
                            <div className="cal-column">
                                <div className="name-week">جمعه</div>
                                <div className="day">۱</div>
                                <div className="day">۲</div>
                                <div className="day">۳</div>
                                <div className="day">۴</div>
                            </div>
                        </div>

                    </div>
                    <div className="calendar-container">


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar