export const state = () => ({
  courses: [
    {
      id: 'CME1',
      featured: true,
      courseTitle: 'Thống kê y học và phân tích số liệu cơ bản',
      instructors: ['TS. BS. Nguyễn Ngọc Vân Phương', 'ThS. Nguyễn Trọng Hiến'],
      level: 'Đào tạo liên tục',
      courseShortDescription: 'Đây là môn học cung cấp cho người học những kiến thức cơ bản về phương pháp thống kê áp dụng trong khoa học sức khỏe và kĩ năng sử dụng phần mềm SPSS để xử lí một số thống kê thường dùng. Từ đó, người học có thể đánh giá các Y văn ở khía cạnh thống kê và lựa chọn được phương pháp thống kê phù hợp nhằm giải quyết 1 vấn đề sức khỏe.',
      goals: [
        'Kiến thức cơ bản về thống kê mô tả (các loại biến số, các giá trị đặc trưng, phương pháp trình bày số liệu, và cách thức thu thập số liệu), thống kê phân tích (lí thuyết ước lượng, kiểm định giả thuyết cho so sánh 2 số trung bình, 2 tỷ lệ, phân tích tương quan và hồi qui tuyến tính đơn)',
        'Một số kĩ năng thường dùng trong xử lí dữ liệu bằng phần mềm SPSS.'
      ],
      courseOutputs: [
        'Đánh giá được các kết quả về thống kê mô tả trình bày trong Y văn.',
        'Lựa chọn được phương pháp trình bày số liệu thích hợp trong 3 cách trình bày (văn bản, bảng và hình).',
        'Lựa chọn đúng các kiểm định t, chi-binh phương trong so sánh 2 số trung bình hoặc hai tỷ lệ.',
        'Biện luận được mối liên hệ giữa 2 biến số (định lượng, định tính)'
      ],
      textbooks: [
        'Lê Trường Giang (2011), Thống kê Y học, NXB Y học.',
        'Tập bài giảng của Giảng viên.',
        'Barton, B. & Peat, J (2014), Medical Statistics: A Guide to SPSS, Data Analysis and Critical Appraisal (2nd Edition), John Wiley & Sons Inc.',
        'Daniel, W. W. (2011),  Biostatistics: A Foundation for Analysis in the Health Sciences (9th Edition), Wiley.'
      ],
      grading: 'link',
      schedule: 'link',
      assignments: ['link 1', 'link 2'],
      lectureNotes: ['link 1', 'link 2'],
      tags: ['Sau đại học', 'SPSS', 'Cơ bản'],
      disabledEnroll: false
    },
    {
      id: 'PTSL1',
      featured: true,
      courseTitle: 'Phân tích số liệu',
      instructors: ['Th.S Nguyễn Trọng Hiến'],
      courseShortDescription: 'Expedita ut velit hic esse placeat. Dolor dolorum aut dolores fuga iste at. Sunt eligendi explicabo nesciunt. Eveniet doloribus quia quis nemo est eos voluptas pariatur.',
      tags: ['YTCC3', 'SPSS', 'Cơ bản'],
      disabledEnroll: true
    },
    {
      id: 'TKYH1',
      featured: true,
      courseTitle: 'Thống kê y học',
      courseShortDescription: 'Expedita ut velit hic esse placeat. Dolor dolorum aut dolores fuga iste at. Sunt eligendi explicabo nesciunt. Eveniet doloribus quia quis nemo est eos voluptas pariatur.',
      tags: ['YCQ', 'Cơ bản'],
      disabledEnroll: true
    },
    {
      id: 'E1',
      featured: false,
      courseTitle: 'Excel cơ bản',
      courseShortDescription: 'Expedita ut velit hic esse placeat. Dolor dolorum aut dolores fuga iste at. Sunt eligendi explicabo nesciunt. Eveniet doloribus quia quis nemo est eos voluptas pariatur.',
      tags: ['YCQ', 'Excel', 'Cơ bản'],
      disabledEnroll: true
    }
  ]
})

export const getters = {
  getCourses: (state) => {
    return state.courses
  },
  getCoursesByFeatured: (state) => {
    return state.courses.filter(course => course.featured === true)
  },
  getCoursesQuantity: (state) => {
    return state.courses.length
  },
  getCoursesById: state => (id) => {
    return state.courses.find(course => course.id === id)
  }
}
