import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import ProfileItem from "./ProfileItem";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Profiles</h1>
          <p className="lead">
            <i className="far fa-eye">
              {" "}
              Browse and connect with the Deaf and ASL community.
            </i>
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapstateToProps = (state) => ({ profile: state.profile });

export default connect(mapstateToProps, { getProfiles })(Profiles);
