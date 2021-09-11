import React,{useContext,useEffect} from 'react'
// import '../../assets/css/style_profile.css'
import '../../assets/css/profile_page/profile_style.css'
import studentRegisterContext from '../../context/Register/studentRegisterContext'
import ProfileNavbar from './ProfileNavbar'



const Profile = () => {
    const authContext = useContext(studentRegisterContext);
  const {user, loadUser} = authContext
 
    useEffect(()=>{
      authContext.loadUser()
    },[])
    return (
      <>
        <ProfileNavbar />
        <div style={{ marginTop: "100px" }} />
        <div className="container">
          <div className="page-profile">
            <div className="row">
              {/* COL 1 */}
              <div className="col-md-3">
                <section className="panel">
                  <div className="panel-body noradius padding-10">
                    <figure className="margin-bottom-10">
                      {/* image */}
                      <img
                        className="img-responsive"
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt="img"
                      />
                    </figure>
                    {/* /image */}
                    {/* progress bar */}
                    <h6 className="progress-head">
                      Profile Completion <span className="pull-right">60%</span>
                    </h6>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "60%" }}
                      />
                    </div>
                    {/* /progress bar */}
                    {/* updated */}
                    <ul className="list-unstyled size-13">
                      <li className="text-gray">
                        <i className="fa fa-check" /> Birthday {user ? user.ages : "update birthday"}
                      </li>
                      {/* <li className="text-gray">
                        <i className="fa fa-check" /> Update Profile Picture
                      </li> */}
                      {/* <li>Confirm Your Account</li> */}
                      <li>Course : {user ? user.courses : "update your course"}</li>
                      <li>Campus : {user ? user.campuss : "update your course"}</li>
                    </ul>
                    {/* /updated */}
                    <hr className="half-margins" />
                    {/* About */}
                    <h6 className="text-black">
                      {user ? user.fname + '- ' + user.last_names : "update you full  names"}
                      <small className="text-gray size-14"> student</small>
                    </h6>
                    <p className="size-12">
                      About me ......
                    </p>
                    {/* /About */}
                    <hr className="half-margins" />
                    {/* Social */}
                    <h6>Follow Me</h6>
                    <a
                      href="/#"
                      className="btn ico-only btn-facebook btn-xs"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      href="/#"
                      className="btn ico-only btn-twitter btn-xs"
                      title="Twitter"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      href="/#"
                      className="btn ico-only btn-google-plus btn-xs"
                      title="Google plus"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                    <a
                      href="/#"
                      className="btn ico-only btn-linkedin btn-xs"
                      title="Linked In"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                    <a
                      href="/#"
                      className="btn ico-only btn-pinterest btn-xs"
                      title="Pinterest"
                    >
                      <i className="fa fa-pinterest" />
                    </a>
                    <a
                      href="/#"
                      className="btn ico-only btn-flickr btn-xs"
                      title="Flickr"
                    >
                      <i className="fa fa-flickr" />
                    </a>  
                            
                                   
                    {/* /Social */}
                  </div>
                </section>
              </div>
              {/* /COL 1 */}
              {/* COL 2 */}
              <div className="col-md-5">
                <div className="tabs white nomargin-top">
                  <ul className="nav nav-tabs tabs-primary">
                    <li className="active">
                      <a href="#overview" data-toggle="tab">
                        job overview
                      </a>
                    </li>
                    <li>
                      <a href="#edit" data-toggle="tab">
                        profile overview
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {/* Overview */}
                    <div id="overview" className="tab-pane active">
                      <div className="margin-top-10">
                        <h1 style={{ textAlign: "center" }}>Recent Jobs</h1>
                      </div>
                      {/* <form className="well">
                <textarea rows={2} className="form-control" placeholder="What's on your mind?" defaultValue={""} />
                <div className="margin-top-10">
                  <button type="submit" className="btn btn-sm btn-primary pull-right">Post</button>
                  <a href="/#" className="btn btn-link profile-btn-link" data-toggle="tooltip" data-placement="bottom" title data-original-title="Add a Location"><i className="fa fa-map-marker" /></a>
                  <a href="/#" className="btn btn-link profile-btn-link" data-toggle="tooltip" data-placement="bottom" title data-original-title="Add Photo"><i className="fa fa-camera" /></a>
                  <a href="/#" className="btn btn-link profile-btn-link" data-toggle="tooltip" data-placement="bottom" title data-original-title="Add File"><i className="fa fa-file" /></a>
                </div>
              </form> */}
                      <hr className="invisible half-margins" />
                      {/* COMMENT */}
                      <ul className="comment list-unstyled padding-10">
                        <li className="comment">
                          {/* avatar */}
                          <img
                            className="avatar"
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            width={50}
                            height={50}
                            alt="avatar"
                          />
                          {/* comment body */}
                          <div className="comment-body">
                            <a href="/#" className="comment-author">
                              <small className="text-muted pull-right">
                                {" "}
                                12 Minutes ago{" "}
                              </small>
                              <span>Melisa gates foundation</span>
                            </a>
                            <p>
                             more about the job
                            </p>
                          </div>
                          {/* /comment body */}
                          {/* options */}
                          <ul className="list-inline size-11 margin-top-10">
                            <li>
                              <a href="/#" className="text-info">
                                <i className="fa fa-reply" /> Comment in reply 
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="text-success">
                                <i className="fa fa-thumbs-up" /> Like
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="text-muted">
                                Show this kind of jobs
                              </a>
                            </li>
                            <li className="pull-right">
                              <a href="/#" className="text-danger">
                                hide types of jobs
                              </a>
                            </li>
                            <li className="pull-right">
                              <a href="/#" className="text-primary">
                                Edit
                              </a>
                            </li>
                          </ul>
                        </li>
                        {/* /options */}
                        <li className="comment comment-reply">
                          {/* avatar */}
                          <img
                            className="avatar"
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            width={35}
                            height={35}
                            alt="avatar"
                          />
                          {/* comment body */}
                          <div className="comment-body">
                            <a href="/#" className="comment-author">
                              <small className="text-muted pull-right">
                                {" "}
                                4 Minutes ago{" "}
                              </small>
                              <span>{user ? user.fname : "user comment"}</span>
                            </a>
                            <p>
                             leave a comment!{" "}
                              <i className="fa fa-smile-o green" />
                            </p>
                          </div>
                          {/* /comment body */}
                          {/* options */}
                          <ul className="list-inline size-11">
                            <li>
                              <a href="/#" className="text-success">
                                <i className="fa fa-thumbs-up" /> Like
                              </a>
                            </li>
                            <li className="pull-right">
                              <a href="/#" className="text-danger">
                                Delete
                              </a>
                            </li>
                            <li className="pull-right">
                              <a href="/#" className="text-primary">
                                Edit
                              </a>
                            </li>
                          </ul>
                          {/* /options */}
                        </li>
                     
                      </ul>
                      {/* /COMMENT */}
                      {/* COMMENT */}
                      <ul className="comment list-unstyled padding-10">           
                                  
                        <li>
                          <div className="input-group">
                            <input
                              id="btn-input"
                              type="text"
                              className="form-control"
                              placeholder="Type your message..."
                            />
                            {/* <span className="input-group-btn">
                              <button className="btn btn-primary" id="btn-chat">
                                <i className="fa fa-reply" /> Reply
                              </button>
                            </span> */}
                          </div>
                        </li>
                      </ul>
                      {/* /COMMENT */}
                    </div>
                    {/* Edit */}
                    <div id="edit" className="tab-pane">
                      <div>this is the profile section of each job on click</div>
                      {/* <form className="form-horizontal padding-10" method="get">
                        <h4>Personal Information</h4>
                        <fieldset>
                          <div className="form-group">
                            <label
                              className="col-md-3 control-label"
                              htmlFor="profileFirstName"
                            >
                              First Name
                            </label>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                id="profileFirstName"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              className="col-md-3 control-label"
                              htmlFor="profileLastName"
                            >
                              Last Name
                            </label>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                id="profileLastName"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              className="col-md-3 control-label"
                              htmlFor="profileAddress"
                            >
                              Address
                            </label>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                id="profileAddress"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              className="col-md-3 control-label"
                              htmlFor="profileCompany"
                            >
                              Company
                            </label>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                id="profileCompany"
                              />
                            </div>
                          </div>
                        </fieldset>
                        <hr />
                        <h4>About</h4>
                        <fieldset>
                          <div className="form-group">
                            <label className="col-xs-3 control-label">
                              Public Profile
                            </label>
                            <div className="col-md-8">
                              <label className="checkbox">
                                <input
                                  type="checkbox"
                                  defaultValue={1}
                                  defaultChecked="checked"
                                  id="profilePublic"
                                />
                                <i /> Checkbox 1
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              className="col-md-3 control-label"
                              htmlFor="profileBio"
                            >
                              Biographical Info
                            </label>
                            <div className="col-md-8">
                              <textarea
                                className="form-control"
                                rows={3}
                                id="profileBio"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="sky-form">
                              <label className="col-xs-3 control-label">
                                Profile Image
                              </label>
                              <div className="col-md-8">
                                <label
                                  htmlFor="file"
                                  className="input input-file"
                                >
                                  <div className="button">
                                    <input
                                      type="file"
                                      id="file"
                                      onchange="this.parentNode.nextSibling.value = this.value"
                                    />
                                    Browse
                                  </div>
                                  <input type="text" readOnly />
                                </label>
                                <a
                                  href="/#"
                                  className="btn btn-danger btn-xs nomargin"
                                >
                                  <i className="fa fa-times" /> Remove Current
                                  Image
                                </a>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <hr />
                        <h4>Change Password</h4>
                        <fieldset className="mb-xl">
                          <div className="form-group">
                            <label
                              className="col-md-3 control-label"
                              htmlFor="profileNewPassword"
                            >
                              New Password
                            </label>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                id="profileNewPassword"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label
                              className="col-md-3 control-label"
                              htmlFor="profileNewPasswordRepeat"
                            >
                              Repeat New Password
                            </label>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                id="profileNewPasswordRepeat"
                              />
                            </div>
                          </div>
                        </fieldset>
                        <div className="row">
                          <div className="col-md-9 col-md-offset-3">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                            <button type="reset" className="btn btn-default">
                              Reset
                            </button>
                          </div>
                        </div>
                      </form> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* /COL 2 */}
              {/* COL 3 */}
              <div className="col-md-4">
                {/* projects */}
                <section className="panel panel-default">
                  <header className="panel-heading">
                    <h2 className="panel-title elipsis">
                      <i className="fa fa-rss" /> Most popular jobs
                    </h2>
                  </header>
                  <div className="panel-body noradius padding-10">
                    <ul className="bullet-list list-unstyled">
                      <li className="red">
                        <h3>Epona HTML5 Template</h3>
                        <span className="text-gray size-12">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
                        </span>
                      </li>
                      <li className="green">
                        <h3>Atropos Template</h3>
                        <span className="text-gray size-12">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
                        </span>
                      </li>
                      <li className="blue">
                        <h3>isisone Template</h3>
                        <span className="text-gray size-12">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
                        </span>
                      </li>
                      <li className="orange">
                        <h3>Deusone Template</h3>
                        <span className="text-gray size-12">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* /projects */}
                {/* activity */}
                <section className="panel panel-default">
                  <header className="panel-heading">
                    <h2 className="panel-title elipsis">
                      <i className="fa fa-rss" /> Most Applied jobs
                    </h2>
                  </header>
                  <div className="panel-body noradius padding-10">
                    {/* activity list */}
                    <div className="row profile-activity">
                      {/* activity item */}
                      <div className="col-xs-2 col-sm-1">
                        <time dateTime="2014-06-29" className="datebox">
                          <strong>Jun</strong>
                          <span>29</span>
                        </time>
                      </div>
                      <div className="col-xs-10 col-sm-11">
                        <h6>
                          <a href="page-sidebar.html">
                            Lorem ipsum dolor sit amet
                          </a>
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt laoreet
                          dolore magna aliquam tincidunt erat volutpat laoreet
                          dolore magna aliquam tincidunt erat volutpat.
                        </p>
                      </div>
                      {/* /activity item */}
                      <div className="col-sm-12">
                        <hr className="half-margins" />
                      </div>
                      {/* /activity separator */}
                      {/* activity item */}
                      <div className="col-xs-2 col-sm-1">
                        <time dateTime="2014-06-29" className="datebox">
                          <strong>Jun</strong>
                          <span>29</span>
                        </time>
                      </div>
                      <div className="col-xs-10 col-sm-11">
                        <h6>
                          <a href="page-sidebar.html">
                            Sed diam nonummy nibh euismod
                          </a>
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt laoreet
                          dolore magna aliquam tincidunt erat volutpat laoreet
                          dolore magna aliquam tincidunt erat volutpat.
                        </p>
                      </div>
                      {/* /activity item */}
                      <div className="col-sm-12">
                        <hr className="half-margins" />
                      </div>
                      {/* /activity separator */}
                      {/* paginatoin */}
                      <div className="text-center">
                        <ul className="pagination pagination-sm">
                          <li className="disabled">
                            <a href="/#">Prev</a>
                          </li>
                          <li className="active">
                            <a href="/#">1</a>
                          </li>
                          <li>
                            <a href="/#">2</a>
                          </li>
                          <li>
                            <a href="/#">3</a>
                          </li>
                          <li>
                            <a href="/#">4</a>
                          </li>
                          <li>
                            <a href="/#">Next</a>
                          </li>
                        </ul>
                      </div>
                      {/* /paginatoin */}
                    </div>
                    {/* /activity list */}
                  </div>
                </section>
                {/* /activity */}
              </div>
              {/* /COL 3 */}
            </div>
          </div>
        </div>
      </>
    );
}

export default Profile
