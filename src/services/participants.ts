import { Participant } from '../components/AppTypes'

const participants = [
  { id: '4214b8b3-cc95-46dd-a56e-3c51a5c093c5', name: 'Grant Nicolas', email: 'Torrey7@gmail.com', phone: '0104382243', isEditing: false },
  { id: 'abbf366f-b565-461e-8d76-5a3aebce3462', name: 'Carole Mohr', email: 'Shayne2@gmail.com', phone: '0407928689', isEditing: false },
  { id: 'ee7776b2-d0e3-46a1-acda-47006216c99f', name: 'Ignacio DuBuque', email: 'Torey.Johns@hotmail.com', phone: '0108422714', isEditing: false },
  { id: 'ffc4b091-e6c9-451a-b934-8bed92a04d4c', name: 'Candace Mills', email: 'Mariane.Hoppe@yahoo.com', phone: '0405000995', isEditing: false },
  { id: '50c8c3d2-a9f1-4c7a-b8ed-82f4b4a549dd', name: 'Diane Schmidt', email: 'Coralie_Jerde39@gmail.com', phone: '0606736485', isEditing: false },
  { id: '49e12a8a-2ef1-4ece-8b9a-53c35319e3dd', name: 'Dr. Joel Dicki', email: 'Edison.Murphy@gmail.com', phone: '0807889782', isEditing: false },
  { id: '19364332-dd13-464c-8648-a1ddffcd61a3', name: 'Ollie Robel', email: 'Tiffany_Schmidt@gmail.com', phone: '0203718662', isEditing: false },
  { id: 'd471ef76-64b2-478a-b700-8fe95def6b15', name: 'Omar Harris', email: 'Evie_Baumbach43@gmail.com', phone: '0603301043', isEditing: false },
  { id: '66a92c82-279a-495a-8a6b-63e4b04e541e', name: 'Alexandra Sanford', email: 'Devyn_OConnell@yahoo.com', phone: '0608783570', isEditing: false },
  { id: 'ab100ca6-c7b7-4ba0-be4c-d0227640b91f', name: 'Clara Witting', email: 'Abigayle60@gmail.com', phone: '0402135669', isEditing: false },
  { id: '3c5a161c-7cdd-409b-a716-cd0071cee8cb', name: 'Angel Ullrich', email: 'Terence_Stanton62@gmail.com', phone: '0306339121', isEditing: false },
  { id: '0fb4fec0-57d5-4d05-bec6-79f81b70f1a6', name: "Malcolm O'Keefe", email: 'Thora.Larkin@gmail.com', phone: '0102559579', isEditing: false },
  { id: 'b9d4af92-d3f4-4810-828d-e8ecc8b4af47', name: 'Angelo Moen', email: 'Linwood79@hotmail.com', phone: '0605802350', isEditing: false },
  { id: '9e3236eb-3023-4b1b-a070-f1df12645e79', name: 'Mrs. Wallace Littel', email: 'Rory_Krajcik@gmail.com', phone: '0302650568', isEditing: false },
  { id: 'a4facef9-a26a-432f-9a59-f7b63f658362', name: 'Sue Olson', email: 'Prudence0@gmail.com', phone: '0504412582', isEditing: false },
  { id: '3b855af7-240b-4a4c-aaff-a8f3cad0a6a4', name: 'Hilda Bernier', email: 'Demarcus_Reilly@yahoo.com', phone: '0905340802', isEditing: false },
  { id: '29902284-cea7-4c3e-9aca-25c11e425155', name: 'Jill Brown', email: 'Jovany_Goyette47@yahoo.com', phone: '0407777227', isEditing: false },
  { id: 'b703d365-2531-446b-92b6-09c3e28da8df', name: 'Delia Wintheiser', email: 'Helmer.Goldner31@hotmail.com', phone: '0706674481', isEditing: false },
  { id: '5b7b3481-9187-4dbe-a6a4-4153cfb5c770', name: 'Tyler Collins', email: 'Ubaldo.Carter68@hotmail.com', phone: '0709151810', isEditing: false },
  { id: '0a42bb0e-de0b-4d7c-82d0-192f04eb0269', name: 'Carolyn King', email: 'Raven_Schumm96@hotmail.com', phone: '0201565062', isEditing: false }
]

/**
 * Generate random participants to show on the list.
 * In a real projects these would be loaded from the backend.
 */
export const fetchParticipants = (): Promise<Participant[]> => Promise.resolve(participants)
