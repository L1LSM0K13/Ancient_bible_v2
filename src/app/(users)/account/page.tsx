import BaseNode from "@/components/BaseNode";

export default function Account() {
    return (
    <>
        <BaseNode title={"Your Account"} className={'nodeMargins'}>
            <div className={'grid grid-cols-3'}>
                <div className={'col-start-1'}>
                    <input type="text" placeholder={'Change Name'} className={''}/>
                    <input type="text" placeholder={'Change Email'} className={''}/>
                    <input type="text" placeholder={'Change Password'} className={''}/>
                    <input type="text" placeholder={'Confirm Password'} className={''}/>
                </div>
                <div>

                </div>
            </div>
        </BaseNode>
    </>
    );
}
