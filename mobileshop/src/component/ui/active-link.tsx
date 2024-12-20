import { Link, useNavigate } from "react-router-dom";
import React, { Children } from "react";

const ActiveLink = ({
  children,
  lang,
  activeClassName,
  href,
  ...props
}: any) => {
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  const className =
    lang === href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link to={href} {...props} className={className}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
