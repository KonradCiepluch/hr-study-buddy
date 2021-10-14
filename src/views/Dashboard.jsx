import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import { NavWrapper, NavTitle, NavButton, Navigation } from 'components/molecules/GroupsNavigation/GroupsNavigation.styles';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import useStudents from 'hooks/useStudents';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { id } = useParams();
  const { getGroups } = useStudents();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  if (!id && groups.length) return <Redirect to={`group/${groups[0]}`} />;

  return (
    <>
      <NavWrapper>
        <NavTitle>{`Group ${id}`}</NavTitle>
        <NavButton>
          change group
          <ArrowIcon />
          <Navigation>
            {groups.map((group) => (
              <Link key={group} to={`/group/${group}`}>
                {group}
              </Link>
            ))}
          </Navigation>
        </NavButton>
      </NavWrapper>
      <ViewWrapper>
        <StudentsList />
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
