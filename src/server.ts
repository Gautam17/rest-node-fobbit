/**
 * @author Gautam
 */
const PORT = process.env.PORT || 8081;
// const HOSTNAME = process.env.HOST || "127.0.0.1";

import server from "./controller";

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

export default server;
