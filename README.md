```bash

├── .bundle
    └── config
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── .vscode
    └── settings.json
├── .watchmanconfig
├── App.tsx
├── Gemfile
├── Gemfile.lock
├── README.md
├── __tests__
    └── App.test.tsx
├── android
    ├── app
    │   ├── build.gradle
    │   ├── debug.keystore
    │   ├── proguard-rules.pro
    │   └── src
    │   │   ├── debug
    │   │       └── AndroidManifest.xml
    │   │   └── main
    │   │       ├── AndroidManifest.xml
    │   │       ├── java
    │   │           └── com
    │   │           │   └── fold
    │   │           │       ├── MainActivity.kt
    │   │           │       └── MainApplication.kt
    │   │       └── res
    │   │           ├── drawable
    │   │               └── rn_edit_text_material.xml
    │   │           ├── mipmap-hdpi
    │   │               ├── ic_launcher.png
    │   │               └── ic_launcher_round.png
    │   │           ├── mipmap-mdpi
    │   │               ├── ic_launcher.png
    │   │               └── ic_launcher_round.png
    │   │           ├── mipmap-xhdpi
    │   │               ├── ic_launcher.png
    │   │               └── ic_launcher_round.png
    │   │           ├── mipmap-xxhdpi
    │   │               ├── ic_launcher.png
    │   │               └── ic_launcher_round.png
    │   │           ├── mipmap-xxxhdpi
    │   │               ├── ic_launcher.png
    │   │               └── ic_launcher_round.png
    │   │           └── values
    │   │               ├── strings.xml
    │   │               └── styles.xml
    ├── build.gradle
    ├── gradle.properties
    ├── gradle
    │   └── wrapper
    │   │   ├── gradle-wrapper.jar
    │   │   └── gradle-wrapper.properties
    ├── gradlew
    ├── gradlew.bat
    └── settings.gradle
├── app.json
├── babel.config.js
├── index.js
├── ios
    ├── .xcode.env
    ├── Podfile
    ├── Podfile.lock
    ├── fold.xcodeproj
    │   ├── project.pbxproj
    │   └── xcshareddata
    │   │   └── xcschemes
    │   │       └── fold.xcscheme
    ├── fold.xcworkspace
    │   ├── contents.xcworkspacedata
    │   └── xcshareddata
    │   │   └── IDEWorkspaceChecks.plist
    ├── fold
    │   ├── AppDelegate.h
    │   ├── AppDelegate.mm
    │   ├── Images.xcassets
    │   │   ├── AppIcon.appiconset
    │   │   │   └── Contents.json
    │   │   └── Contents.json
    │   ├── Info.plist
    │   ├── LaunchScreen.storyboard
    │   └── main.m
    └── foldTests
    │   ├── Info.plist
    │   └── foldTests.m
├── jest.config.js
├── metro.config.js
├── package.json
├── react-native.config.js
├── setting.json
├── src
    ├── App.tsx
    ├── Services
    │   ├── API.ts
    │   └── hooks.ts
    ├── assets
    │   ├── images
    │   │   ├── car.jpg
    │   │   ├── cart.png
    │   │   ├── checkbox.png
    │   │   ├── minus.png
    │   │   ├── plus.png
    │   │   └── search.png
    │   └── svg
    │   │   ├── BackSVG.tsx
    │   │   └── index.ts
    ├── components
    │   ├── All
    │   │   └── index.tsx
    │   ├── AvoidKeyboard
    │   │   └── index.tsx
    │   ├── CheckBox
    │   │   └── index.tsx
    │   ├── ConfirmModalProvider
    │   │   ├── CustomModal.tsx
    │   │   └── index.tsx
    │   ├── Container
    │   │   ├── index.tsx
    │   │   └── styles.ts
    │   ├── Dropdown
    │   │   ├── SDropdown.tsx
    │   │   ├── index.tsx
    │   │   └── styles.tsx
    │   ├── HOC
    │   │   └── index.tsx
    │   ├── Header
    │   │   ├── index.tsx
    │   │   └── styles.tsx
    │   ├── Loader
    │   │   └── index.tsx
    │   ├── PickerSheet
    │   │   ├── index.tsx
    │   │   └── styles.ts
    │   ├── Popup
    │   │   └── index.tsx
    │   ├── Sheet
    │   │   ├── index.tsx
    │   │   └── styles.ts
    │   ├── Tabs
    │   │   └── index.tsx
    │   ├── TextField
    │   │   ├── InputText.tsx
    │   │   ├── index.tsx
    │   │   └── styles.tsx
    │   ├── TouchableImage
    │   │   └── index.tsx
    │   ├── Typography
    │   │   └── index.tsx
    │   ├── VectorIcon
    │   │   └── index.tsx
    │   ├── button
    │   │   ├── index.tsx
    │   │   └── styles.ts
    │   ├── carousel
    │   │   └── index.tsx
    │   └── datePicker
    │   │   └── index.tsx
    ├── constants
    │   ├── API.ts
    │   ├── data.ts
    │   ├── fonts.ts
    │   ├── images.ts
    │   ├── index.ts
    │   ├── routes.ts
    │   ├── schema.ts
    │   └── screens.ts
    ├── navigators
    │   ├── AuthStack.tsx
    │   ├── MainStack.tsx
    │   └── RootStack.tsx
    ├── package.json
    ├── redux
    │   ├── MainSlice.tsx
    │   ├── index.ts
    │   └── store.tsx
    ├── screens
    │   ├── Auth
    │   │   ├── ForgotPass
    │   │   │   ├── index.tsx
    │   │   │   └── styles.ts
    │   │   ├── Login
    │   │   │   ├── index.tsx
    │   │   │   └── styles.ts
    │   │   └── Register
    │   │   │   ├── index.tsx
    │   │   │   └── styles.ts
    │   └── Main
    │   │   ├── Home
    │   │       ├── components
    │   │       │   ├── MiniProducts.tsx
    │   │       │   ├── SearchBar.tsx
    │   │       │   ├── index.ts
    │   │       │   └── styles.ts
    │   │       ├── index.tsx
    │   │       ├── styles.ts
    │   │       └── types.ts
    │   │   └── ViewCart
    │   │       ├── index.tsx
    │   │       └── styles.ts
    ├── theme
    │   ├── colors.ts
    │   ├── commonStyle.ts
    │   ├── flex.ts
    │   ├── index.ts
    │   ├── margin.ts
    │   └── padding.ts
    └── utils
    │   ├── Func.tsx
    │   ├── NavigationServices.tsx
    │   ├── SocialLogin.tsx
    │   ├── formikValues.ts
    │   ├── graphServer.ts
    │   ├── helperNotes.ts
    │   ├── index.tsx
    │   ├── reqMultiPermission.tsx
    │   ├── schema.ts
    │   └── types.ts
├── tsconfig.json
└── yarn.lock
