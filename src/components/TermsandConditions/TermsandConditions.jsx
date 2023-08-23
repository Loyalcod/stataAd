import LangSelect from "../LangSelect/LangSelect";

function TermsandConditions() {
  return (
    <>
      <div className="nk-block nk-auth-footer">
        <div className="nk-block-between">
          <ul className=" flex justify-centerw-full">
            <li className="nav-item">
              <a className="nav-link text-[10px] text-[#999999]" href="#">
                Terms & Condition
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-[10px] text-[#999999]" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-[10px] text-[#999999]" href="#">
                Help
              </a>
            </li>
            <LangSelect />
          </ul>
          {/* <!-- .nav --> */}
        </div>
        <div className="mt-3 w-full">
          <p className="text-[#999999] text-[10px] text-center">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default TermsandConditions;
