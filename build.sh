#! /bin/bash

rm PrivacyQuiz.apk

rm platforms/android/build/outputs/apk/android-release-unsigned.apk

cordova build --release android

cp platforms/android/build/outputs/apk/android-release-unsigned.apk .

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore privacy-quiz-my-release-key.keystore android-release-unsigned.apk PrivacyQuiz

zipalign -v 4 android-release-unsigned.apk PrivacyQuiz.apk

rm android-release-unsigned.apk

