import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import { NavWrapper, NavTitle, NavButton, Navigation } from 'components/molecules/GroupsNavigation/GroupsNavigation.styles';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import useStudents from 'hooks/useStudents';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState('');
  const { id } = useParams();
  const { getGroups, getStudentById } = useStudents();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length) return <Redirect to={`group/${groups[0].name}`} />;

  return (
    <>
      <NavWrapper>
        <NavTitle>{`Group ${id}`}</NavTitle>
        <NavButton>
          change group
          <ArrowIcon />
          <Navigation>
            {groups.map(({ name }) => (
              <Link key={name} to={`/group/${name}`}>
                {name}
              </Link>
            ))}
          </Navigation>
        </NavButton>
      </NavWrapper>
      <ViewWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal handleClose={handleCloseModal} isOpen={isOpen}>
          <StudentDetails student={currentStudent} />
        </Modal>
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
