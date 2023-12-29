export function createMeeting(
  title: string,
  description: string,
  timezone: string,
  hostName: string,
  preferredTime: number[]
) {
  //Send SQL to the DB
  return 32;
}

export function changeMeeting(
  meetingId: number,
  title: string,
  description: string,
  timezone: string,
  hostName: string,
  preferredTime: number[]
) {
  //Send SQL to the DB
  return;
}

export function getMeetingInfo(id: number) {
  //Find meeting info using the id
  return {
    id: id,
    title: "Test Meeting",
    description: "This is a test meeting",
    timezone: "KST",
    hostName: "22LR",
  };
}

export function createPreferredTime(
  meetingId: number,
  name: string,
  preferredTime: number[]
) {
  //Send SQL query to insert preferred time data to the meeting
  return;
}

export function finalDecision(meetingId: number, decidedTime: number[]) {
  //Send SQL query to the DB
  return;
}

export function checkLogin(meetingId: number, user: string, password: string) {
  //Check SQL
  if (user == "22LR" && password == "22lr*") {
    return true;
  } else {
    return false;
  }
}
