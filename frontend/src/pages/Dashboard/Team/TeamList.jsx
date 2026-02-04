import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/common/useFetch";
import useDelete from "../../../hooks/common/useDelete";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPenToSquare } from "react-icons/fa6";
import ButtonFill from "../../../components/common/ButtonFill";

export default function TeamList() {

  const { getData, data: team, loading } = useFetch();
  const { deleteData } = useDelete();

  useEffect(() => {
    getData("/team");
  }, []);

  const handleDelete = async (id) => {
    if (confirm("هل أنت متأكد من حذف هذا العضو؟")) {
      await deleteData(`/team/${id}`);
      getData("/team"); 
    }
  };

  if (loading) return <p>جاري تحميل البيانات...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">أعضاء الفريق</h1>
        <ButtonFill href="/dashboard/team/add">+ إضافة عضو</ButtonFill>
      </div>

      <table className="w-full border text-right">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">#</th>
            <th className="p-2 border">الاسم</th>
            <th className="p-2 border">المنصب</th>
            <th className="p-2 border">الصورة</th>
            <th className="p-2 border">الروابط الاجتماعية</th>
            <th className="p-2 border">خيارات</th>
          </tr>
        </thead>
        <tbody>
          {team?.map((member, i) => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{member.name}</td>
              <td className="border p-2">{member.position}</td>
              <td className="border p-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover mx-auto"
                />
              </td>
              <td className="border p-2">
                {member.social_links && member.social_links.length > 0 ? (
                  member.social_links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 mx-1"
                    >
                      {link.icon}
                    </a>
                  ))
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>
              <td className="border p-2 flex justify-center space-x-3">
                <Link
                  to={`/dashboard/team/${member.id}/edit`}
                  className="text-blue-600"
                >
                  <FaPenToSquare />
                </Link>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="text-red-600"
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
