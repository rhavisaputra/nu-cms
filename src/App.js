import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LinkItem from './component/link-item';
import './App.css';
// widget
import WidgetGetTwitterFeed from './services/widget/getUserTimeline';
import WidgetGetYoutubeFeed from './services/widget/getVideoListUrl';
import GetTweetAndYoutubeFeed from './services/widget/getTweetAndYoutubeFeed';
// prayingtime
import PrayingGetThreeDayPrayingTime from './services/prayingtime/prayingGetThreeDayPrayingTime';
import PrayingGetTodayPrayingTime from './services/prayingtime/prayingGetTodayPrayingTime';
import PrayingGetPrayingTimeByDate from './services/prayingtime/prayingGetPrayingTimeByDate';
import PrayingGetCurrentMonthPrayingTime from './services/prayingtime/prayingGetCurrentMonthPrayingTime';
import PrayingGetCurrentMonthPrayingTimeOfCity from './services/prayingtime/prayingGetCurrentMonthPrayingTimeOfCity';
import PrayingGetPrayingTimeByYYYYMM from './services/prayingtime/prayingGetPrayingTimeByYYYYMM';
// servicequran
import QuranGetBookmark from './services/servicequran/quranGetBookmark';
import QuranSetBookmark from './services/servicequran/quranSetBookmark';
import ListSurah from './services/servicequran/listSurah';
import QuranSearchSurahByName from './services/servicequran/quranSearchSurahByName';
import QuranViewSurahAll from './services/servicequran/quranViewSurahAll';
import QuranViewSurahByName from './services/servicequran/quranViewSurahByName';
import QuranViewSurahByNumber from './services/servicequran/quranViewSurahByNumber';
import SurahListByJuzAll from './services/servicequran/surahListByJuzAll';
import SurahListByJuzNumber from './services/servicequran/surahListByJuzNumber';
// forum
import DisplayAllForumByUser from './services/forum/displayAllForumByUser';
import CreateForum from './services/forum/createForum';
import PostComment from './services/forum/postComment';
import EditComment from './services/forum/editComment';
import CloseForum from './services/forum/closeForum';
import DisplayForumDetail from './services/forum/displayForumDetail';
// videocourse
// import VideoCourse from './services/videocourse/videoCourseSepertiUdemy';
// import SearchVideoCourseByapi from './services/videocourse/searchVideoCourseByap';
// user
// import RegisterUser from './services/user/registerUser';
// import UpdateProfile from './services/user/updateProfile';
// import ResetPassword from './services/user/resetPassword';
// import UpdatePassword from './services/user/updatePassword';
// import InboxList from './services/user/inboxList';
// import InboxDetail from './services/user/inboxDetail';
// import Login from './services/user/login';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      widget: [
        {api: "widgetGetTwitterFeed",path: "/nu/widgetservice/getUserTimeline"},
        {api: "widgetGetYoutubeFeed",path: "/nu/widgetservice/getVideoListUrl"},
        {api: "getTweetAndYoutubeFeed",path: "/nu/widgetservice/getTweetAndYoutubeFeed"}
      ],
      prayingtime: [
        {api: "prayingGetThreeDayPrayingTime",path: "/nu/prayingtimeservice/prayingGetThreeDayPrayingTime"},
        {api: "prayingGetTodayPrayingTime",path: "/nu/prayingtimeservice/prayingGetTodayPrayingTime"},
        {api: "prayingGetPrayingTimeByDate",path: "/nu/prayingtimeservice/prayingGetPrayingTimeByDate"},
        {api: "prayingGetCurrentMonthPrayingTime",path: "/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTime"},
        {api: "prayingGetCurrentMonthPrayingTimeOfCity",path: "/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTimeOfCity"},
        {api: "prayingGetPrayingTimeByYYYYMM",path: "/nu/prayingtimeservice/prayingGetPrayingTimeByYYYYMM"}
      ],
      servicequran: [
        {api: "quranGetBookmark",path: "/nu/servicequran/quranGetBookmark"},
        {api: "quranSetBookmark",path: "/nu/servicequran/quranSetBookmark"},
        {api: "listSurah",path: "/nu/servicequran/listSurah"},
        {api: "quranSearchSurahByName",path: "/nu/servicequran/quranSearchSurahByName"},
        {api: "quranViewSurahAll",path: "/nu/servicequran/quranViewSurahAll"},
        {api: "quranViewSurahByName",path: "/nu/servicequran/quranViewSurahByName"},
        {api: "quranViewSurahByNumber",path: "/nu/servicequran/quranViewSurahByNumber"},
        {api: "surahListByJuzAll",path: "/nu/servicequran/surahListByJuzAll"},
        {api: "surahListByJuzNumber",path: "/nu/servicequran/surahListByJuzNumber"}
      ],
      forum: [
        {api: "displayAllForumByUser",path: "/nu/forum/displayAllForumByUser"},
        {api: "createForum",path: "/nu/forum/createForum"},
        {api: "postComment",path: "/nu/forum/postComment"},
        {api: "editComment",path: "/nu/forum/editComment"},
        {api: "closeForum",path: "/nu/forum/closeForum"},
        {api: "displayForumDetail",path: "/nu/forum/displayForumDetail"}
      ],
      videocourse: [
        {api: "videoCourse",path: "/nu/videocourse/videoCourseSepertiUdemy"},
        {api: "searchVideoCourseByapi",path: "/nu/videocourse/searchVideoCourseByapi"}
      ],
      user: [
        {api: "registerUser",path: "/nu/user/registerUser"},
        {api: "updateProfile",path: "/nu/user/updateProfile"},
        {api: "resetPassword",path: "/nu/user/resetPassword"},
        {api: "updatePassword",path: "/nu/user/updatePassword"},
        {api: "inboxList",path: "/nu/user/inboxList"},
        {api: "inboxDetail",path: "/nu/user/inboxDetail"},
        {api: "login",path: "/nu/user/login"}
      ]
    }
  }
  slide() {
    document.getElementById('sidebar').classList.toggle('active')
  }
  render() {
    return(
      <BrowserRouter>
        <div>
          <div id="sidebar" className="active">
            <div className="toggle-btn" onClick={this.slide}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <LinkItem api="widget" data={this.state.widget}/>
            <LinkItem api="prayingtime" data={this.state.prayingtime}/>
            <LinkItem api="servicequran" data={this.state.servicequran}/>
            <LinkItem api="forum" data={this.state.forum}/>
            <LinkItem api="videocourse" data={this.state.videocourse}/>
            <LinkItem api="user" data={this.state.user}/>
          </div>
          <div className="container">
            <Switch>
              {/* widget */}
              <Route path="/" exact component=""/>
              <Route path="/nu/widgetservice/getUserTimeline" exact component={WidgetGetTwitterFeed}/>
              <Route path="/nu/widgetservice/getVideoListUrl" exact component={WidgetGetYoutubeFeed}/>
              <Route path="/nu/widgetservice/getTweetAndYoutubeFeed" exact component={GetTweetAndYoutubeFeed}/>
              {/* prayingtime */}
              <Route path="/nu/prayingtimeservice/prayingGetThreeDayPrayingTime" exact component={PrayingGetThreeDayPrayingTime}/>
              <Route path="/nu/prayingtimeservice/prayingGetTodayPrayingTime" exact component={PrayingGetTodayPrayingTime}/>
              <Route path="/nu/prayingtimeservice/prayingGetPrayingTimeByDate" exact component={PrayingGetPrayingTimeByDate}/>
              <Route path="/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTime" exact component={PrayingGetCurrentMonthPrayingTime}/>
              <Route path="/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTimeOfCity" exact component={PrayingGetCurrentMonthPrayingTimeOfCity}/>
              <Route path="/nu/prayingtimeservice/prayingGetPrayingTimeByYYYYMM" exact component={PrayingGetPrayingTimeByYYYYMM}/>
              {/* servicequran */}
              <Route path="/nu/servicequran/quranGetBookmark" exact component={QuranGetBookmark}/>
              <Route path="/nu/servicequran/quranSetBookmark" exact component={QuranSetBookmark}/>
              <Route path="/nu/servicequran/listSurah" exact component={ListSurah}/>
              <Route path="/nu/servicequran/quranSearchSurahByName" exact component={QuranSearchSurahByName}/>
              <Route path="/nu/servicequran/quranViewSurahAll" exact component={QuranViewSurahAll}/>
              <Route path="/nu/servicequran/quranViewSurahByName" exact component={QuranViewSurahByName}/>
              <Route path="/nu/servicequran/quranViewSurahByNumber" exact component={QuranViewSurahByNumber}/>
              <Route path="/nu/servicequran/surahListByJuzAll" exact component={SurahListByJuzAll}/>
              <Route path="/nu/servicequran/surahListByJuzNumber" exact component={SurahListByJuzNumber}/>
              {/* forum */}
              <Route path="/nu/forum/displayAllForumByUser"exact component={DisplayAllForumByUser} />
              <Route path="/nu/forum/createForum" exact component={CreateForum}/>
              <Route path="/nu/forum/postComment" exact component={PostComment}/>
              <Route path="/nu/forum/editComment" exact component={EditComment}/>
              <Route path="/nu/forum/closeForum" exact component={CloseForum}/>
              <Route path="/nu/forum/displayForumDetail" exact component={DisplayForumDetail}/>
              {/* videocourse */}
              {/* <Route path="/nu/videocourse/videoCourseSepertiUdemy" exact component={VideoCourse}/>
              <Route path="/nu/videocourse/searchVideoCourseByapi" exact component={SearchVideoCourseByapi}/> */}
              {/* user */}
              {/* <Route path="/nu/user/registerUser" exact component={RegisterUser}/>
              <Route path="/nu/user/updateProfile" exact component={UpdateProfile}/>
              <Route path="/nu/user/resetPassword" exact component={ResetPassword}/>
              <Route path="/nu/user/updatePassword" exact component={UpdatePassword}/>
              <Route path="/nu/user/inboxList" exact component={InboxList}/>
              <Route path="/nu/user/inboxDetail" exact component={InboxDetail}/>
              <Route path="/nu/user/login" exact component={Login}/> */}

              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
function PageNotFound() {
  return <h1 className="text-center">404. Page Not Found</h1>
}
export default App;
