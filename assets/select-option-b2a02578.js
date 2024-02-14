const l=[{value:"1",label:"เพื่อดำเนินการ"},{value:"2",label:"เพื่อถือปฏิบัติ"},{value:"3",label:"เพื่อทราบ"},{value:"4",label:"เพื่อทราบและพิจารณา"},{value:"5",label:"เพื่อทราบและพิจารณาดำเนินการ"},{value:"6",label:"เพื่อทราบและพิจารณาสั่งการ"},{value:"7",label:"เพื่อทราบและพิจารณาอนุมัติ"},{value:"8",label:"เพื่อโปรดทราบ"},{value:"9",label:"เพื่อพิจารณาและชี้แนะแนวทาง"},{value:"10",label:"เพื่อพิจารณาและรายงานผลการดำเนินงาน"},{value:"11",label:"เพื่อพิจารณาให้ความเห็นชอบ"},{value:"12",label:"เพื่อพิจารณาอนุมัติและลงนาม"},{value:"13",label:"เพื่อลงนาม"},{value:"14",label:"เพื่อพิจารณาและรายงานผลการดำเนินงาน"},{value:"15",label:"เพื่อวินิจฉัยและตีความ"},{value:"16",label:"เพื่ออนุมัติ"}],e=[{value:"inside",label:"หนังสือรับภายใน"},{value:"outside",label:"หนังสือรับภายนอก"}],a=[{value:"1",label:"หนังสือภายนอก"},{value:"2",label:"หนังสือภายใน"},{value:"3",label:"หนังสือประทับตรา"},{value:"4",label:"หนังสือสั่งการ"},{value:"5",label:"หนังสือประชาสัมพันธ์"},{value:"6",label:"หนังสืออื่นๆ"}],u=[{value:"1",label:"หนังสือภายนอก"},{value:"2",label:"หนังสือภายใน"},{value:"3",label:"หนังสือตราประทับตรา"},{value:"4",label:"หนังสือสั่งการ"},{value:"5",label:"หนังสือประชาสัมพันธ์"},{value:"6",label:"หนังสืออื่นๆ"},{value:"7",label:"บันทึกข้อความ"}],v=[{value:"1",label:"ปกติ"},{value:"2",label:"ด่วน"},{value:"3",label:"ด่วนมาก"},{value:"4",label:"ด่วนที่สุด"}],b=[{value:"1",label:"ปกติ"},{value:"2",label:"ลับ"},{value:"3",label:"ลับมาก"},{value:"4",label:"ลับที่สุด"}],s=[{value:"1",label:"ปกติ"},{value:"2",label:"ลับ"}],t=[{value:"1",label:"เอกสารทั่วไป (ส่งฉบับจริง)"},{value:"2",label:"เอกสารอิเล็กทรอนิกส์"}],o=[{value:"1",label:"เอกสารทั่วไป (ส่งฉบับจริง)"},{value:"2",label:"เอกสารอิเล็กทรอนิกส์"},{value:"3",label:"หนังสือรับจากอีเมล"}],c=[{label:"สร้าง",value:!0},{label:"ไม่สร้าง",value:!1}],i=[{label:"ไม่ติดตาม",value:!1},{label:"ติดตามอีกครั้งเมื่อ",value:!0}],n=[{value:1,label:"เพื่อทราบ"},{value:2,label:"ลงนาม"},{value:3,label:"สั่งการ"}],L=[{value:"รอผู้ปฏิบัติ",label:"รอผู้ปฏิบัติ"},{value:"ห้ามใช้",label:"ห้ามใช้"},{value:"กำลังปฏิบัติงาน",label:"กำลังปฏิบัติงาน"},{value:"เสร็จแล้ว",label:"เสร็จแล้ว"},{value:"ปิดงานแล้ว",label:"ปิดงานแล้ว"},{value:"ถูกลบทิ้ง",label:"ถูกลบทิ้ง"},{value:"ยกเลิก",label:"ยกเลิก"},{value:"ตี/ดึงกลับ",label:"ตี/ดึงกลับ"},{value:"เอกสารหมดอายุ",label:"เอกสารหมดอายุ"},{value:"เอกสารถูกยืม",label:"เอกสารถูกยืม"},{value:"เก็บลงแฟ้มเลข 18 หลัก",label:"เก็บลงแฟ้มเลข 18 หลัก"},{value:"โอนเอกสารข้ามปี",label:"โอนเอกสารข้ามปี"},{value:"จัดเก็บแล้ว",label:"จัดเก็บแล้ว"}],r=[{value:"ยังไม่ถูกใช้งาน",label:"ยังไม่ได้ใช้"},{value:"ใช้งานแล้ว",label:"ใช้เลขจองแล้ว"},{value:"ยกเลิกเลขจอง",label:"ยกเลิกเลขจอง"}],d=[{value:"ทั้งหมด"},{value:"รอรับ"},{value:"บันทึกฉบับร่าง"},{value:"รอเสนอแนะ"},{value:"รอตรวจสอบ"},{value:"รอสั่งการ"},{value:"รอลงนาม"},{value:"สั่งการเสร็จสิ้น"},{value:"ลงนามเสร็จสิ้น"},{value:"ปฏิบัติงานเสร็จ"},{value:"ยกเลิก"},{value:"คืนเรื่อง"},{value:"ดึงกลับ"}],p=[{value:"หนังสือภายนอก"},{value:"หนังสือบันทึกข้อความ"},{value:"หนังสือตราประทับ"},{value:"หนังสือระเบียบ"},{value:"หนังสือข้อบังคับ"},{value:"หนังสือประกาศ"},{value:"หนังสือแถลงการณ์"},{value:"หนังสือข่าว"},{value:"หนังสือรับรอง"},{value:"หนังสือรายงานการประชุม"}],k=[{value:"หนังสือภายนอก"},{value:"หนังสือภายใน"},{value:"หนังสือเวียน"}];export{a,k as b,b as c,o as d,r as e,e as f,u as g,d as h,t as i,c as j,i as k,p as l,L as m,s as n,l as o,n as r,v as s};
