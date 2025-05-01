const calculateAvgRating = reviews => {
    //     Điều kiện	Ý nghĩa
    // totalRating === 0	Nếu tổng rating = 0 → nghĩa là chưa ai review → avgRating = chuỗi rỗng "".
    // totalRating === 1	Nếu tổng rating = 1 → return 1 luôn (không chia).
    // else	Nếu không phải 0, không phải 1 → lấy tổng điểm chia số lượng review để ra trung bình cộng. LEARN
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = totalRating === 0
        ? ""
        : totalRating === 1
            ? totalRating
            : totalRating / reviews?.length.toFixed(1);

    return {
        totalRating,
        avgRating
    }
}
export default calculateAvgRating