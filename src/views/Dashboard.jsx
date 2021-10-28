import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import { NavWrapper, NavTitle, NavButton, Navigation } from 'components/molecules/GroupsNavigation/GroupsNavigation.styles';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import { useGetGroupsQuery } from 'components/store';

const Dashboard = () => {
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentStudentId, setCurrentStudentId] = useState('');
  const { data, isLoading } = useGetGroupsQuery();

  const handleOpenStudentDetails = (id) => {
    setCurrentStudentId(id);
    handleOpenModal();
  };

  if (isLoading) return <NavTitle>Loading...</NavTitle>;

  if (!id && data.groups.length) return <Redirect to={`/group/${data.groups[0].name}`} />;

  return (
    <>
      <NavWrapper>
        <NavTitle>{`Group ${id}`}</NavTitle>
        <NavButton>
          change group
          <ArrowIcon />
          <Navigation>
            {data.groups.map(({ name }) => (
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
          <StudentDetails studentId={currentStudentId} />
        </Modal>
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
