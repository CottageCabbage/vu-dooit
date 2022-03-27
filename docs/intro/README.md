# Getting Started
Vu-dooit is an Open Source project that's not even in Alpha yet. I'm mostly working on it solo. If you are interested in contributing though, I hope that these docs help somewhat.

- [Inspiration](../Inspiration.md): Examples of other Open-Source and Proprietary Task Managers out there.

- [Relevant Links](../Relevant.md): Links that may be relevant to project.

- [Vue Communities](../VueComunities.md): Vue-related communities

## Development
To start making any changes to the project, you first need to copy it to your computer using one of the available methods. For example, this can be done using the `git clone` command:

```git
git clone https://github.com/CottageCabbage/vu-dooit.git
```

Then, go to the folder and install all the dependencies:

```git
# change directories
cd vu-dooit
# install dependencies
npm install
```

Right away, you should be able to start a development server. Right now, the app runs on the browser with no error. However, that may change in the future. Use Electron if you'd like to be sure.

```git
# Browser:
npm run serve
# Electron:
npm run electron:serve
```

## Dependencies
Dependencies, Frameworks, Libraries, etc. used by Vu-dooit.

- **Vue 3**
  - Vue Router 4
  - Pinia
- **Electron**
- VuePress
  - theme-hope
- Lowdb (Unsure)
- **Testing:** (haven't started on this yet)
  - Cypress
  - Jest
  - Spectron