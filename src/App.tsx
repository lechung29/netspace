/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout, MainLayout, TitleResolver } from "./layouts";
import { ProtectedRoute } from "./components";
import { Login } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<TitleResolver />}>
                    <Route element={<MainLayout />}>{/* <Route index element={<Home />} /> */}</Route>
                    <Route element={<ProtectedRoute />}>
                        <Route element={<MainLayout />}>
                            {/* <Route path="messages" element={<MessagePage />} /> */}
                            {/* <Route element={<SettingLayout />}>
                            <Route path="account-settings" element={<GeneralSetting />} />
                            <Route path="account-settings/social-links" element={<SocialSetting />} />
                            <Route path="account-settings/notifications" element={<NotificationSettings />} />
                            <Route path="account-settings/privacy" element={<PrivacySettings />} />
                            <Route path="account-settings/password" element={<PasswordSettings />} />
                        </Route> */}
                        </Route>
                    </Route>
                    <Route element={<AuthLayout />}>
                        <Route path="login" element={<Login />} />
                        {/* <Route path="sign-up" element={<SignUp />} /> */}
                    </Route>
                    <Route path="*" element={<div className="text-[orange]">Page not found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
