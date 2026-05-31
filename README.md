# SocialWebsite

A full-stack social web application built with Django and React.

## What this project is

SocialWebsite is a modern social media-style web application designed to showcase a content feed, post details, and interactive browsing through a clean React UI powered by a Django backend.

It is structured as two main parts:

- A **Django backend** that manages data, business logic, and the post content model.
- A **React frontend** that delivers the user interface, rendering posts, comments, and navigation.

## What it does

The app lets users explore social content in a single-page interface with dynamic post listings and detailed post views.

Key behaviors include:

- displaying a collection of posts
- showing individual post details
- supporting nested comments or discussions
- filtering or searching content through UI components
- separating frontend presentation from backend data handling

## Why it exists

This project demonstrates how a full-stack application can combine Django and React cleanly:

- Django handles structured data, models, and backend endpoints
- React handles component-driven UI, routing, and responsive page updates
- SQLite keeps local development simple while still enabling persistent content

## Core features

- Content feed with post previews
- Detailed post view pages
- React component architecture for reusable UI parts
- Django app structure for clean backend organization
- Integrated frontend and backend project layout

## Architecture

- `backend/` contains the Django project and the `posts` app that defines the data model, views, and configuration.
- `frontend/` contains the React app, including reusable components, page layouts, and asset files.

## Tech stack

- Django 5.x
- React 19.x
- React Router
- SQLite
- JavaScript / JSX

## Project structure

- `backend/`
  - Django project configuration and app logic
  - `posts/` app for managing social post content
- `frontend/`
  - React source code and component tree
  - `public/` static app shell and metadata

## Good for

- learning full-stack development with Django + React
- prototyping social content interfaces
- exploring separation of backend data and frontend presentation

## Notes

This repository is focused on demonstrating the app concept and structure rather than production deployment details.
