import type { MetaFunction } from "@remix-run/node";
import * as stylex from '@stylexjs/stylex'
import Image from "~/components/image";
import Par from "~/components/paragraph";
import Table from "~/components/table/table";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple Stack" },
    { name: "description", content: "Chanakan's Simple Stack" },
  ];
};

const styles = stylex.create({
  base: {
    fontSize: 18,
    width: '60%',
    marginHorizontal: 'auto',
    padding: '2rem'
  },
  table: {
    width: '100%',
    textAlign: 'center'
  },
})

export default function Index() {
  return (
    <main {...stylex.props(styles.base)}>
      <Image variant='contain' src='https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <h1>Chanakan's Personal Stack for his future "big" project</h1>
      <Par>General things I like to learn about, so I make an entire stack that I can use in the future</Par>
      <hr />
      <Table>
        <tbody>
          <tr>
            <th>Technology</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Remix</td>
            <td>Full Stack</td>
          </tr>
          <tr>
            <td>Drizzle ORM</td>
            <td>Database Interaction</td>
          </tr>
          <tr>
            <td>StyleX</td>
            <td>Styling</td>
          </tr>
        </tbody>

      </Table>
      <Par>There isn't much to reason with why I choose these technology as my personal stack, simply because I want to learn them. So I made them into one stack as a whole, so that I can learn everything all at once.</Par>
      <Par>สวัสดีครับ ผมเป็นคนไทยเช่นกัน ผมเลยจะลองพิมพ์ภาษาไทยด้วย เพื่อทดสอบว่า เว็บไซต์จะแสดงข้อความตามที่ผมต้องการหรือไม่</Par>
    </main >

  );
}
