import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LinkItem from './component/link-item';
import './App.css';
import WidgetGetTwitterFeed from './services/widget/getUserTimeline';
import WidgetGetYoutubeFeed from './services/widget/getVideoListUrl';
import GetTweetAndYoutubeFeed from './services/widget/getTweetAndYoutubeFeed';
import PrayingGetThreeDayPrayingTime from './services/prayingtime/prayingGetThreeDayPrayingTime';
import prayingGetTodayPrayingTime from './services/prayingtime/prayingGetTodayPrayingTime';

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
              <Route path="/" exact component=""/>
              <Route path="/nu/widgetservice/getUserTimeline" exact component={WidgetGetTwitterFeed}/>
              <Route path="/nu/widgetservice/getVideoListUrl" exact component={WidgetGetYoutubeFeed}/>
              <Route path="/nu/widgetservice/getTweetAndYoutubeFeed" exact component={GetTweetAndYoutubeFeed}/>

              <Route path="/nu/prayingtimeservice/prayingGetThreeDayPrayingTime" exact component={PrayingGetThreeDayPrayingTime}/>
              <Route path="/nu/prayingtimeservice/prayingGetTodayPrayingTime" exact component={prayingGetTodayPrayingTime}/>
              <Route path="/nu/prayingtimeservice/prayingGetTodayPrayingTime" exact component=""/>
              <Route path="/nu/prayingtimeservice/prayingGetPrayingTimeByDate" exact component=""/>
              <Route path="/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTime" exact component=""/>
              <Route path="/nu/prayingtimeservice/prayingGetCurrentMonthPrayingTimeOfCity" exact component=""/>
              <Route path="/nu/prayingtimeservice/prayingGetPrayingTimeByYYYYMM" exact component=""/>

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
