/* eslint-disable react-refresh/only-export-components */
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import SignIn from "../pages/auth/SignIn";
import Layout from "../navigation/layout/main-layout";
import Hero from "../pages/home/hero";
import {
  HERO,
  MAIN_LAYOUT,
  FEATURED_POSTS,
  RECENT_POSTS,
  CONTACT,
  TOPICS,
  PROFILE,
  SETTINGS,
} from "../constants/page-paths";

import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";
import FeaturedPosts from "../pages/featured-posts/featured_posts";
import RecentPosts from "../pages/recent-posts/recent_posts";
import Topics from "../pages/topics/Topics";
import Contact from "../pages/contact/contact";


// const SignIn = React.lazy(() => import("../pages/SignIn"));
// const Layout = React.lazy(() => import("../navigation/layout/main-layout"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={MAIN_LAYOUT} element={<Layout />}>
        <Route path={HERO} element={<Hero />} />
        <Route path={TOPICS} element={<Topics />} />
        <Route path={FEATURED_POSTS} element={<FeaturedPosts />} />
        <Route path={RECENT_POSTS} element={<RecentPosts />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path={SETTINGS} element={<Settings />} />
        <Route path={PROFILE} element={<Profile />} />
      </Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
