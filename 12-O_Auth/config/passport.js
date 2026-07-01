
import passport from "passport";
import googlePassport from "passport-google-oauth20";

import dotenv from "dotenv";

import User from "../model/UserModel.js";

dotenv.config({ path: "./.env" });

const googleStrategy = googlePassport.Strategy;

passport.use(
    new googleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL,
        },
        async function (accessToken, refreshToken, profile, done) {
            try {
                const alreadyUser = await User.findOne({ googleId: profile.id });

                console.log("profile", profile)

                if (!alreadyUser) {
                    const newUser = await User.create({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0]?.value,
                    });

                  return   done(null, newUser);
                }

              return   done(null, alreadyUser);
            } catch (error) {
                console.log(error.message);
            }
        },
    ),
);



passport.serializeUser((user, done) => {

    done(null, user.id)
})



passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);

    done(null, user);
  } catch (error) {
    done(error, null);
  }
});


export default passport