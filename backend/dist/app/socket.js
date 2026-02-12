import { Server, Socket } from "socket.io";
import MngRecruitment from "@/hooks/MngRecruitment";
const mngRecruitment = MngRecruitment;
const create_recruitment = (socket, data) => {
  const duplication = mngRecruitment.add(data);
  if (duplication) {
    socket.broadcast.emit("duplicationId_post");
    return;
  }
  socket.broadcast.emit("create_recruitment_post", JSON.stringify(data));
};
const update_recruitment = (socket, data) => {
  const index = mngRecruitment.update(data);
  if (!index) return;
  socket.broadcast.emit(
    "update_recruitment_post",
    JSON.stringify({ data: data, index: index }),
  );
};
const delete_recruitment = (socket, data) => {
  const index = mngRecruitment.delete(data);
  if (!index) return;
  socket.broadcast.emit("delete_recruitment_post", index);
};
const request_recruitment = (socket) => {
  socket.emit(
    "request_recruitment_post",
    JSON.stringify(mngRecruitment.request()),
  );
};
export const registerSocketHandlers = (io) => {
  io.on("connection", (socket) => {
    socket.on("create_recruitment", (data) => {
      create_recruitment(socket, data);
    });
    socket.on("update_recruitment", (data) => {
      update_recruitment(socket, data);
    });
    socket.on("delete_recruitment", (data) => {
      delete_recruitment(socket, data);
    });
    socket.on("request_recruitment", () => {
      request_recruitment(socket);
    });
  });
};
