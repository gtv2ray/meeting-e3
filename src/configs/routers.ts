import MEETINGS from '../pages/meetings.jsx';
import MEETINGDETAIL from '../pages/meetingDetail.jsx';
import CREATEMEETING from '../pages/createMeeting.jsx';
import LOGIN from '../pages/login.jsx';
import REGISTER from '../pages/register.jsx';
import EDITMEETING from '../pages/editMeeting.jsx';
import HOME from '../pages/home.jsx';
export const routers = [{
  id: "meetings",
  component: MEETINGS
}, {
  id: "meetingDetail",
  component: MEETINGDETAIL
}, {
  id: "createMeeting",
  component: CREATEMEETING
}, {
  id: "login",
  component: LOGIN
}, {
  id: "register",
  component: REGISTER
}, {
  id: "editMeeting",
  component: EDITMEETING
}, {
  id: "home",
  component: HOME
}]