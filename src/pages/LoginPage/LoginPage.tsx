import React from "react";
import {useTranslate} from "@tolgee/react";

import { Issuer } from 'openid-client';

export const LoginPage = () => {
    const t = useTranslate()

    const googleIssuer = Issuer.discover('https://accounts.google.com');


    return (
        <div className={"flex flex-col items-center py-8 h-full"}>
            <h2 className={"text-2xl font-bold"}>{t("LOGIN_TITLE")}</h2>
            <p className={"text-center w-2/3"}>{t("LOGIN_HINT")}</p>
            <p className={"text-4xl py-12"}>A B C D 7 J K L</p>
            <p dangerouslySetInnerHTML={{__html: t("LOGIN_INTRODUCTION")}}/>
        </div>
    )

}