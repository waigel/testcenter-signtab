import {T} from "@tolgee/react";

export const Header = () => {
    return (<div className="bg-brand-500 text-white h-64 flex">
        <div className="bg-site-image bg-no-repeat bg-bottom bg-fixed bg-cover w-full pt-8 ">
            <div className="flex">
                <div className="m-auto">
                    <h1 className="text-center text-5xl py-8 font-bold"><T>SIGN_TABLET_TITLE</T></h1>
                    <div className="text-center px-5 md:px-0">
                        <T>SIGN_TABLET_DESCRIPTION</T>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}